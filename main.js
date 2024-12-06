/*
GLM: German Logic Masters
*/

function init() {
/*
header: html-header for GLM
footer: html-footer for GLM
col: columns in bootstrap
bg
*/


  let header="<ul>\n  <a href=\"\"><img: style=\"width:60%;\"/></a>";
  let footer="</ul><br/>\n<a href=\"#\" target=\"_blank\" style=\"\n\
    text-decoration:none; \n\
    background-color: LightSteelBlue; \n\
    color: MidnightBlue; \n\
    border: 1px solid DarkGrey; \n\
    padding: 0.6em 1em; \n\
    margin: 1em; \n\
    font-size: larger; \n\
    font-weight: bold; \n\
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6); \n\
    border-radius: 1.6em;\
\">Play</a><br/><br/>This html has been generated by <a href=\"https://github.com/martinbaselier/sudoku-rule-writer\">rule writer</a>";

  let col=$("<div/>")
  let bg=$("<div/>")
  col.attr("class","col-4")
  bg.attr("class","btn-group-vertical")
  col.append(bg)
  $("#interface").append(col)
  $("#preview").html(header)
  for (scope of ruleset.scopes) {
/*
add scopes to different page parts (button-scopes are defined in index.html)
*/
    let sp=$("<div/>")
    let sy=$("<span/>")
    let gl=$("<span/>")
    let pv=$("<span/>")
    sp.attr("id","sudokupad"+scope)
    sy.attr("id","symbols"+scope).html(" ")
    gl.attr("id","germanlogic"+scope)
    pv.attr("id","preview"+scope)

    // Apply
    $("#sudokupad").append(sp)
    $("#symbols").append(sy)
    $("#germanlogic").append(gl)
    $("#preview").append(pv)
}
$("#preview").append(footer)


  for (rule of ruleset.rules.sort((r1,r2) => Number(r2.order) - Number(r1.order))) {
/*
adds all rules to html and hide them standardly.
*/

    let btc=$("<div/>") //button container -> column.
    let ip=$("<input/>")  //checkbox (for the buttons)
    let bt=$("<label/>")  //visual aspect of button
    let sym=$("<span/>")  //symbol (at the top there's a list of symbols)
    let badge=$("<span/>")
    let checked=" d-none" //used to autohide everything; will be emptied when checked has a value

    //these are only used when there are multiple options for a button;
    let btGroup=$("<div/>") //outer group for button and dropdown
    let btVarGrp=$("<div/>")//group in button to choose alternatives;
    let toggleDropdown=$("<button/>")//opens dropdown menu
    let menuItems=$("<div/>")//alternative options
    let btId="dd"+rule.id//id for dropdown

    //if (rule.checked=="") {checked=""}

    ip.attr("id",rule.id).attr("class","btn-check").attr("type","checkbox").attr("checked",rule.checked).change(buttonPress).attr("aria-label","Basic checkbox toggle button group")
    ip.attr("data-variation","0")
    bt.attr("for",rule.id).text(rule.symbol+" "+rule.title).attr("class","btn btn-primary text-start col")
    btc.attr("class","col-3 py-1 px-1 d-grid gap-1")

    menuItems.attr("class","dropdown-menu").attr("aria-labelledby",btId)
    badge.attr("class","badge bg-info rounded-pill")




    sym.attr("class",rule.id+checked).html(rule.symbol)
    for  (let ruleVariant=0;ruleVariant<rule.descriptions.length;ruleVariant++) {
      let txt=$("<div/>")//sudokupad text
      let gl=$("<code/>")//html-code for German Logic Masters
      let pv=$(rule.descriptions[ruleVariant].html)//preview of the html
      let menuItem=$("<a/>")


      gl.attr("class",rule.id+ruleVariant+" text-dark"+checked).text("  "+rule.descriptions[ruleVariant].html).append($("<br/>"))
      txt.attr("class",rule.id+ruleVariant+" card-text"+checked).html(rule.symbol+"&Tab;"+rule.descriptions[ruleVariant].text)
      pv.attr("class",rule.id+ruleVariant+checked)
      menuItem.attr("class","dropdown-item").attr("href","#").attr("data-jzz-gui-player","true").text(rule.descriptions[ruleVariant].title).click(pickVariaton)
      menuItem.attr("data-variantnr",ruleVariant)
      menuItems.append(menuItem)

      $("#sudokupad"+rule.scope).append(txt)
      $("#sudokupad"+rule.scope).append(txt)
      $("#germanlogic"+rule.scope).append(gl)
      $("#preview"+rule.scope).append(pv)
      //temporary check
    }
    if (rule.descriptions.length>1) {
      //$("#"+rule.scope).append(ip).append(bt)
      badge.text(rule.descriptions[0].title)
      bt.append(badge)
      btGroup.attr("class","btn-group").attr("role","group")
      btVarGrp.attr("class","btn-group").attr("role","group")
      toggleDropdown.attr("id",btId).attr("type","button").attr("class","btn btn-primary btn-sm dropdown-toggle")
      toggleDropdown.attr("data-toggle","dropdown").attr("aria-haspopup","true").attr("aria-expanded","false").attr("title","click and pick a variation")

      btVarGrp.append(toggleDropdown).append(menuItems)
      btGroup.append(ip).append(bt).append(btVarGrp)
      btc.append(btGroup)
    } else {
      bt.addClass("")
      btc.append(ip).append(bt)
    }

    $("#"+rule.scope).after(btc)

    $("#symbols"+rule.scope).append(sym)
  }
  $("#sudoku").click()
  update()
}


function buttonPress(){
 let id=$(this).attr("id")
 let variant=$(this).attr("data-variation")
 //console.log(id)
 // if ($("#"+id).attr("checked")==true) {$("#txt"+id).removeClass("d-none")}
 if ($(this).is(":checked")) {
   $("."+id+variant).removeClass("d-none")
   $("."+id).removeClass("d-none")
 }
 else {
   $("."+id+variant).addClass("d-none")
   $("."+id).addClass("d-none")
 }
}

function pickVariaton() {

  //change badge text:
  let group=$(this).parent().parent().parent()
  let badge=group.children("label").children("span")
  let button=group.children("input")
  let oldVar=button.attr("data-variation")
  let newVar=$(this).attr("data-variantnr")

  badge.text($(this).text())
  //group.children("label").children("span").text($(this).text())
  if (button.is(":checked")) {
    let id=button.attr("id")
    $("."+id+oldVar).addClass("d-none")
    $("."+id+newVar).removeClass("d-none")
  }
  button.attr("data-variation",newVar)


  //console.log($(this).parent().parent().parent().children("input").attr("data-variation"))
  //change option
}

function update(){
  let header="<ul>\n  <a href=\""+$("#link").val()+"\"><img:"+$("#image").val()+" style=\"width:60%;\"/></a>";
  let footer="</ul>\n<br/>\n<a href=\""+$("#link").val()+"\" target=\"_blank\" style=\"\n\
    text-decoration:none; \n\
    background-color: LightSteelBlue; \n\
    color: MidnightBlue; \n\
    border: 1px solid DarkGrey; \n\
    padding: 0.6em 1em; \n\
    margin: 1em; \n\
    font-size: larger; \n\
    font-weight: bold; \n\
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6); \n\
    border-radius: 1.6em;\
\">Play</a>\n<br/>\n<br/>This html has been generated by <a href=\"https://github.com/martinbaselier/sudoku-rule-writer\">rule writer</a>";
  $("#header").text(header)
  $("#footer").text(footer)
}

function copyText(id) {//copy rules for sudokupad
  //let copyText=document.getElementById(id)
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  console.log($("#sudokupad").innerText)
}
