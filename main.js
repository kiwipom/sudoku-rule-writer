/*
GLM: German Logic Masters
*/

function getHeaderForLMD() {

    return `<ul>
  <a href="${$("#link").val()}"><img:${$("#image").val()} style="width:60%;"/></a>`;
}

function getFooterForLMD() {
  let link = $("#link").val() ?? "#";

  return `</ul>
<br/>
<a href="${link}" target="_blank" style="
  text-decoration:none;
  background-color: LightSteelBlue;
  color: MidnightBlue;
  border: 1px solid DarkGrey;
  padding: 0.6em 1em;
  margin: 1em;
  font-size: larger;
  font-weight: bold;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6);
  border-radius: 1.6em;">Play</a>
<br/>
<br/>This html has been generated by <a href="https://github.com/martinbaselier/sudoku-rule-writer">rule writer</a>
`;
}

function init() {

  for (scope_ruleset of ruleset) {
    let scope = scope_ruleset.scope;

    //  add scopes to different page parts (button-scopes are defined in index.html)
    let sudokuPadSection = $("<div/>");
    let symbolsSection = $("<span/>");
    let lmdSection = $("<span/>");
    let previewSection = $("<span/>");

    sudokuPadSection
      .attr("id", "sudokupad-section-" + scope);
    symbolsSection
      .attr("id", "symbols-section-" + scope)
      .html(" ");
    lmdSection
      .attr("id", "lmd-section-" + scope);
    previewSection
      .attr("id", "preview-section-" + scope);

    // Apply
    $("#sudokupad").append(sudokuPadSection)
    $("#symbols").append(symbolsSection)
    $("#lmd-codearea").append(lmdSection)
    $("#lmd-preview").append(previewSection)

    for (rule of scope_ruleset.rules.sort((r1, r2) => Number(r1.order) - Number(r2.order))) {

      let section = $("#rules-" + scope);

      let ruleButton = createButton(scope, rule);
      section.append(ruleButton);
    }
  }

  $("#sudoku").click();
  update();
}

/* 
 * Dynamically create the html/css for each button, based on the defined rule json.
 *
 * Updates (and hides) the outputs along the way...
 * 
 */
function createButton(scope, rule) {

  let buttonContainer = $("<div/>");
  let buttonCheckbox = $("<input/>");
  let buttonLabel = $("<label/>");
  let buttonSymbol = $("<span/>");
  let selectedOptionPill = $("<span/>");
  let checked = " d-none";

  buttonContainer
    .attr("class", "col-4 py-1 px-1 d-grid gap-1");

  buttonCheckbox
    .attr("id", rule.id)
    .attr("class", "btn-check")
    .attr("type", "checkbox")
    .attr("aria-label", "Basic checkbox toggle button group")
    .attr("data-variation", "0")
    .change(buttonPress);

  buttonLabel
    .attr("for", rule.id)
    .text(rule.symbol + " " + rule.title)
    .attr("class", "btn btn-primary text-start col");

  buttonSymbol
    .attr("class", rule.id + checked)
    .html(rule.symbol);

  selectedOptionPill
    .attr("class", "badge bg-info rounded-pill ms-2");

  updateOutputsForRule(scope, rule, 0, checked);

  let ruleOptions = rule.descriptions
  let numberOfOptions = ruleOptions.length;

  if (numberOfOptions > 1) {

    let optionsGroup = $("<div/>"); //outer group for button and dropdown  <-- btGroup
    let btVarGrp = $("<div/>"); //group in button to choose alternatives;  <-- what is this?
    let toggleDropdownButton = $("<button/>");
    let dropdownOptions = $("<div/>");
    let toggleId = "dd-" + rule.id;

    dropdownOptions
      .attr("class", "dropdown-menu")
      .attr("aria-labelledby", toggleId);

    for (let variantIndex = 0; variantIndex < rule.descriptions.length; variantIndex++) {

      let dropdownOption = $("<a/>");

      dropdownOption
        .attr("class", "dropdown-item")
        .attr("href", "#")
        .attr("data-jzz-gui-player", "true")
        .attr("data-variantnr", variantIndex)
        .text(rule.descriptions[variantIndex].title)
        .click(pickVariaton);

      dropdownOptions.append(dropdownOption);

      if (variantIndex > 0) {
        updateOutputsForRule(scope, rule, variantIndex, checked);
      }
    }

    selectedOptionPill.text(rule.descriptions[0].title);
    buttonLabel
      .append(selectedOptionPill);

    optionsGroup
      .attr("class", "btn-group")
      .attr("role", "group");

    // What is this??
    btVarGrp
      .attr("class", "btn-group")
      .attr("role", "group");

    toggleDropdownButton
      .attr("id", toggleId)
      .attr("type", "button")
      .attr("class", "btn btn-primary btn-sm dropdown-toggle")
      .attr("data-toggle", "dropdown")
      .attr("aria-haspopup", "true")
      .attr("aria-expanded", "false")
      .attr("title", "click and pick a variation");

    btVarGrp
      .append(toggleDropdownButton)
      .append(dropdownOptions);
    optionsGroup
      .append(buttonCheckbox)
      .append(buttonLabel)
      .append(btVarGrp);

    buttonContainer
      .append(optionsGroup);
  }
  else {
    buttonLabel
      .addClass("");

    buttonContainer
      .append(buttonCheckbox)
      .append(buttonLabel);
  }

  return buttonContainer;
}

function updateOutputsForRule(scope, rule, variantIndex, checked) {

  let ruleDescription = rule.descriptions[variantIndex];

  let ruleText = ruleDescription.label ?? ruleDescription.title ?? rule.title;
  ruleText += ": ";
  ruleText += ruleDescription.text;

  let ruleTitle = (ruleDescription.label ?? ruleDescription.title ?? rule.title);
  let ruleHtml = `<li><b>${ruleTitle}:</b> ${ruleDescription.text}</li>`;

  let sudokuPadText = $("<div/>");
  let lmdText = $("<code/>");
  let htmlPreview = $(ruleDescription.html ?? ruleHtml);

  sudokuPadText
    .attr("class", rule.id + variantIndex + " card-text" + checked)
    .html(rule.symbol + "&Tab;" + ruleText);
  $("#sudokupad-section-" + scope).append(sudokuPadText);

  lmdText
    .attr("class", rule.id + variantIndex + " text-dark" + checked)
    .text("  " + (ruleDescription.html ?? ruleHtml))
    .append($("<br/>"));
  $("#lmd-section-" + scope).append(lmdText);

  htmlPreview
    .attr("class", rule.id + variantIndex + checked);
  $("#preview-section-" + scope).append(htmlPreview);
}

function buttonPress() {
  let id = $(this).attr("id")
  let variant = $(this).attr("data-variation")
  //console.log(id)
  // if ($("#"+id).attr("checked")==true) {$("#txt"+id).removeClass("d-none")}
  if ($(this).is(":checked")) {
    $("." + id + variant).removeClass("d-none")
    $("." + id).removeClass("d-none")
  }
  else {
    $("." + id + variant).addClass("d-none")
    $("." + id).addClass("d-none")
  }
}

function pickVariaton() {

  //change badge text:
  let group = $(this).parent().parent().parent()
  let badge = group.children("label").children("span")
  let button = group.children("input")
  let oldVar = button.attr("data-variation")
  let newVar = $(this).attr("data-variantnr")

  badge.text($(this).text())
  //group.children("label").children("span").text($(this).text())
  if (button.is(":checked")) {
    let id = button.attr("id")
    $("." + id + oldVar).addClass("d-none")
    $("." + id + newVar).removeClass("d-none")
  }
  button.attr("data-variation", newVar)

  //console.log($(this).parent().parent().parent().children("input").attr("data-variation"))
  //change option
}

function update() {
  $("#lmd-header").text(getHeaderForLMD());
  $("#lmd-footer").text(getFooterForLMD());

  $("#preview-footer").html(getFooterForLMD());

}

function copyText(id) {//copy rules for sudokupad
  //let copyText=document.getElementById(id)
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  console.log($("#sudokupad").innerText)
}
