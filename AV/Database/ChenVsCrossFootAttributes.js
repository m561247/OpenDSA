/*global ODSA */
$(document).ready(function() {
  "use strict";
  var av_name = "ChenVsCrossFootAttributes";
  var interpret = ODSA.UTILS.loadConfig({av_name: av_name}).interpreter;
  var av = new JSAV(av_name);

   var LabelLeft=100;
   var labelTop=-25;
   var NotationHorGaps=300;
   var NotationVerGaps=100;
   var pX= LabelLeft+NotationHorGaps+80;
   var pY= labelTop+NotationVerGaps;
   var rowNo=1;
   var colNo=1;
   
   var labChen=av.label(interpret("<span style='color:blue;'> Chen Notation </span>"), {left: LabelLeft+NotationHorGaps*colNo, top: labelTop });
   labChen.css({"font-weight": "bold", "font-size": 20});
   colNo=2;

   var labCrows=av.label(interpret("<span style='color:red;'> Crow’s Foot Notation </span>"), {left: LabelLeft+(NotationHorGaps*colNo), top:labelTop });
   labCrows.css({"font-weight": "bold", "font-size": 20});

   var RelLine = av.g.line(LabelLeft+(NotationHorGaps*2)+25, pY, LabelLeft+(NotationHorGaps*colNo)+215, pY, {opacity: 100, "stroke-width": 2});
   RelLine.hide();
   var PKLineCrows=av.g.line(0,0,0,0);
   var PKLineTableCrows=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var PKAttLine=av.g.line(0,0,0,0);
   var stdLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var CorLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var AttstretLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var Attcityline=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var AttBuldgLabLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var ccodeLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var cnameLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var choursLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var sidPkLine=av.g.line(0,0,0,0, {opacity: 100});
   var ccodePkLine=av.g.line(0,0,0,0, {opacity: 100});
   var PKLinecorsCrows=av.g.line(0,0,0,0, {opacity: 100});
   var ComAtt1elpsLine=av.g.line(0,0,0,0, {opacity: 100});
   var ComAtt2elpsLine=av.g.line(0,0,0,0, {opacity: 100});
   var ComAtt3elpsLine=av.g.line(0,0,0,0, {opacity: 100});
   var PKLinecorsTableCrows=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var RegRelLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   var SnameLine=av.g.line(0,0,0,0 , {opacity: 100, "stroke-width": 2});
  var SIDlLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
  var AddLine=av.g.line(0,0,0,0, {opacity: 100, "stroke-width": 2});
   ComAtt1elpsLine.hide();
   ComAtt2elpsLine.hide();
   ComAtt3elpsLine.hide();
   PKAttLine.hide();
   PKLineCrows.hide();
   PKLineTableCrows.hide();
   stdLine.hide();
   CorLine.hide();
   AttstretLine.hide();
   Attcityline.hide();
   sidPkLine.hide();
   AttBuldgLabLine.hide();
   ccodeLine.hide();
   ccodePkLine.hide();
   cnameLine.hide();
   choursLine.hide();
   PKLinecorsCrows.hide();
   PKLinecorsTableCrows.hide();
   RegRelLine.hide();
   SnameLine.hide();
   SIDlLine.hide();
  AddLine.hide();
   //var EntityCrowsRec=av.g.rect(xPositionBigRectangles, yPositionBig1, lengthBig, widthBig);

   // Slide 1
   av.umsg(("Composite attribute demonstration").bold().big());
   av.displayInit(1);
   av.step();

//slide 2
av.umsg(("Here is the chen's composite attribute symbol").bold().big());
  var LabCompAtSym=av.label(interpret("<span style='color:green;'> Composite Attribute</span>"), {left: LabelLeft, top: pY-50 });
  LabCompAtSym.css({"font-weight": "bold", "font-size": 20});
  var CompAttelips=av.g.ellipse(LabelLeft+405, pY+140 , 100, 25, {"stroke-width": 3});
  var CompAttLab=av.label(("<span style='color:blue;'> Composite Att. </span>"), {left: LabelLeft+343, top:pY+110 });
  //CompAttLab.css({"font-weight": "bold", "font-size": 20});
  var ComAtt1elps =av.g.ellipse(LabelLeft-100+400,pY ,60 ,25, {"stroke-width": 3});
   var ComAtt1elpsLab=av.label(("<span style='color:blue;'>comp._Att1 </span>"), {left: LabelLeft-120+380, top:pY-30});
   ComAtt1elpsLine.movePoints([[0,LabelLeft-30+400,pY+115],[1,LabelLeft-100+400,pY+25]]);
   ComAtt1elpsLine.show();
   var ComAtt2elps =av.g.ellipse(LabelLeft+10+400,pY+60 ,60 ,25, {"stroke-width": 3});
   var ComAtt2elpsLab=av.label(("<span style='color:blue;'> comp._Att2 </span>"), {left: LabelLeft-20+380, top:pY+30 });
   ComAtt2elpsLine.movePoints([[0,LabelLeft+10+400,pY+115],[1,LabelLeft+10+400,pY+60+25]]);
   ComAtt2elpsLine.show();
   var ComAtt3elps =av.g.ellipse(LabelLeft+120+400,pY ,60 ,25, {"stroke-width": 3});
   var ComAtt3elpsLab=av.label(("<span style='color:blue;'> comp._Att3 </span>"), {left: LabelLeft+70+400, top:pY-30});
   ComAtt3elpsLine.movePoints([[0,LabelLeft+40+400,pY+115],[1,LabelLeft+120+400,pY+25]]);
   ComAtt3elpsLine.show();
av.step();

//slide 3
av.umsg(("Here is the coresponding crow's foot composite attribute symbol").bold().big());
colNo=3;
var CompAttCrowsREc=av.g.rect(LabelLeft+(NotationHorGaps*2), pY-20, 220, 210, {"stroke-width": 3});
var CompAttCrowsREc2=av.g.rect(LabelLeft+(NotationHorGaps*2), pY-20, 220, 60, {"stroke-width": 3});
var CompAttCrowsLab=av.label(("<span style='color:red;'>Entity</span>"), {left: LabelLeft+(NotationHorGaps*2)+30, top:pY-30});
CompAttCrowsLab.css({"font-weight": "bold", "font-size": 20});
var CompAttCrowsLab1=av.label(("<span style='color:red;'>Composite(Att1,Att2,Att3)</span>"), {left: LabelLeft+(NotationHorGaps*2), top:(pY-60)+(NotationVerGaps*rowNo)});
//CompAttCrowsLab1.css({"font-weight": "bold", "font-size": 18});
av.step();

  //slide 4
  av.umsg(("Using attribute Address as a composite attribute in Chen notation").bold().big());
  CompAttCrowsREc.hide();
  CompAttCrowsREc2.hide();
  CompAttCrowsLab.hide();
  CompAttCrowsLab1.hide();
  LabCompAtSym.hide();
  CompAttelips.hide();
  CompAttLab.hide();
  ComAtt1elps.hide();
  ComAtt1elpsLab.hide();
  ComAtt1elpsLine.hide();
  ComAtt2elps.hide();
  ComAtt2elpsLab.hide();
  ComAtt2elpsLine.hide();
  ComAtt3elps.hide();
  ComAtt3elpsLab.hide();
  ComAtt3elpsLine.hide();
  //av.umsg(interpret("Here is the chen's relation symbol").bold().big());
var ComAttSym=av.label(interpret("<span style='color:green;'> Composite Attribute</span>"), {left: LabelLeft, top: pY-50 });
ComAttSym.css({"font-weight": "bold", "font-size": 20});
var CompAttChenelps=av.g.ellipse(LabelLeft+410, pY+140 , 70, 25, {"stroke-width": 3});
var AttaddLab=av.label(("<span style='color:blue;'> Address </span>"), {left: LabelLeft+373, top:pY+110 });
//AttaddLab.css({"font-weight": "bold", "font-size": 20});
var Attcityelps =av.g.ellipse(LabelLeft-100+400,pY ,60 ,25, {"stroke-width": 3});
 var AttcityLab=av.label(("<span style='color:blue;'> city </span>"), {left: LabelLeft-120+400, top:pY-30});
 Attcityline.movePoints([[0,LabelLeft-30+400,pY+115],[1,LabelLeft-100+400,pY+25]]);
 Attcityline.show();
 var Attstretelps =av.g.ellipse(LabelLeft+10+400,pY+60 ,60 ,25, {"stroke-width": 3});
 var AttstretLab=av.label(("<span style='color:blue;'> street </span>"), {left: LabelLeft-20+400, top:pY+30 });
 AttstretLine.movePoints([[0,LabelLeft+10+400,pY+115],[1,LabelLeft+10+400,pY+60+25]]);
 AttstretLine.show();
 var AttBuldgelps =av.g.ellipse(LabelLeft+120+400,pY ,60 ,25, {"stroke-width": 3});
 //AttBuldgelps.addClass("dashed");
 //AttBuldgelps.addClass("div");
 var AttBuldgLabLab=av.label(("<span style='color:blue;'> Building </span>"), {left: LabelLeft+90+400, top:pY-30});
 //AttBuldgLabLab.addClass(h1);
 AttBuldgLabLine.movePoints([[0,LabelLeft+40+400,pY+115],[1,LabelLeft+120+400,pY+25]]);
 //AttBuldgLabLine.addClass("dashed");
 AttBuldgLabLine.show();
  av.step();

  //slide 5
   CompAttCrowsREc.hide();
 CompAttCrowsREc2.hide();
 CompAttCrowsLab.hide();
 CompAttCrowsLab1.hide();
  av.umsg(("Here is the coresponding crow's foot symbol for Adrress attribute").bold().big());
  colNo=3;
  var EntityChenRecAtt=av.g.rect(LabelLeft+(NotationHorGaps*2), pY-20, 220, 210, {"stroke-width": 3});
  var EntityChenRecAtt2=av.g.rect(LabelLeft+(NotationHorGaps*2), pY-20, 220, 60, {"stroke-width": 3});
  var AttCrowsLab=av.label(("<span style='color:red;'>Student</span>"), {left: LabelLeft+(NotationHorGaps*2)+30, top:pY-30});
  AttCrowsLab.css({"font-weight": "bold", "font-size": 20});
  var AttCrowsLab1=av.label(("<span style='color:red;'>Address(city,street,building)</span>"), {left: LabelLeft+(NotationHorGaps*2), top:(pY-60)+(NotationVerGaps*rowNo)});
  av.step();

  //slide 6
  av.umsg(("Example demonstrating composite attribute").bold().big());
  labChen.hide();
  labCrows.hide();
  ComAttSym.hide();
  CompAttChenelps.hide();
  AttaddLab.hide();
  Attcityelps.hide();
  AttcityLab.hide();
  Attcityline.hide();
  Attstretelps.hide();
  AttstretLab.hide();
  AttstretLine.hide();
  AttBuldgelps.hide();
  AttBuldgLabLab.hide();
  AttBuldgLabLine.hide();
  EntityChenRecAtt.hide();
  EntityChenRecAtt2.hide();
  AttCrowsLab.hide();
  AttCrowsLab1.hide();
  var ProblemLab=av.label(("<span style='color:green;'> Assume Having Student entitiy with attributes name, id and address where address is a composite attribute consisting of city, street and building no. attributes. Show the corresponding physical schema diagram </span>"), {left: LabelLeft-20, top: pY-60 });
  ProblemLab.css({"font-weight": "bold", "font-size": 20});
  av.step();

  //slide 7
  av.umsg(("The corresponding physical relational schema diagram, <span style='color:red;'> Note:</span> In physical schema no copmosite attribute it is decomposed to its corresponding parts ").bold().big());
  AttCrowsLab1.hide();
  ProblemLab.hide();
  labChen.show();
  labCrows.show();
  ComAttSym.show();
  CompAttChenelps.show();
  AttaddLab.show();
  Attcityelps.show();
  AttcityLab.show();
  Attcityline.show();
  Attstretelps.show();
  AttstretLab.show();
  AttstretLine.show();
  AttBuldgelps.show();
  AttBuldgLabLab.show();
  AttBuldgLabLine.show();
  //EntityChenRecAtt.show();
 // EntityChenRecAtt2.show();
  //AttCrowsLab.show();
 // AttCrowsLab1.show();
  EntityChenRecAtt=av.g.rect(LabelLeft+(NotationHorGaps*2)+40, pY-20, 220, 210, {"stroke-width": 3});
   EntityChenRecAtt2=av.g.rect(LabelLeft+(NotationHorGaps*2)+40, pY-20, 220, 60, {"stroke-width": 3});
 var AttCrowsLab2=av.label(("<span style='color:red;'>SID</span>"),  {left: LabelLeft+(NotationHorGaps*2)+40, top:(pY-60)+(NotationVerGaps*rowNo)});
  //AttCrowsLab2.css({"font-weight": "bold", "font-size": 18});
 var AttCrowsLab3=av.label(("<span style='color:red;'>Sname</span>"),  {left: LabelLeft+(NotationHorGaps*2)+40, top:(pY-35)+(NotationVerGaps*rowNo)});
  //AttCrowsLab3.css({"font-weight": "bold", "font-size": 18});
  var AttCrowsLab1=av.label(("<span style='color:red;'>Address(city,street,building)</span>"), {left: LabelLeft+(NotationHorGaps*2)+40, top:(pY-15)+(NotationVerGaps*rowNo)});
  //AttCrowsLab1.css({"font-weight": "bold", "font-size": 18});
  AttCrowsLab=av.label(("<span style='color:red;'>Student</span>"), {left: LabelLeft+(NotationHorGaps*2)+100, top:pY-30});
  AttCrowsLab.css({"font-weight": "bold", "font-size": 20});
  var studSchlab=av.label(("Student"), {left: LabelLeft, top: labelTop+350 });
  studSchlab.css({"font-weight": "bold", "font-size": 15});
  //studSchlab.hide();
  var studSchema = [["SID","Sname","city","street","building"]];
  var studSchemaArr= av.ds.matrix(studSchema, {style: "table", top: labelTop+300+70, left: LabelLeft});
  studSchemaArr._arrays[0].css([0], {"text-decoration": "underline"});

  var EntityStdRec=av.g.rect(LabelLeft+360, pY+190 , 110, 35, {"stroke-width": 3});
  var labStdChen=av.label(("<span style='color:blue;'>Student</span>"), {left: LabelLeft+370, top:pY+170 });
  labStdChen.css({"font-weight": "bold", "font-size": 20});
  var Attsnamegelps =av.g.ellipse(LabelLeft+120+440,pY+65 ,60 ,25, {"stroke-width": 3});
  var labSnameChen=av.label(("<span style='color:blue;'>Sname</span>"), {left: LabelLeft+520, top:pY+30 });
 // labSnameChen.css({"font-weight": "bold", "font-size": 20});
  var AttsIDelps =av.g.ellipse(LabelLeft-100+350,pY+65 ,60 ,25, {"stroke-width": 3});
  var labIDChen=av.label(("<span style='color:blue;'>SID</span>"), {left: LabelLeft-100+330, top:pY+30 });
  //labIDChen.css({"font-weight": "bold", "font-size": 20});
 //  SnameLine=av.g.line(LabelLeft+450, pY+190 ,LabelLeft+120+440,pY+90 , {opacity: 100, "stroke-width": 2});
  // AAddLine=av.g.line(LabelLeft+400, pY+190 ,LabelLeft+400, pY+165, {opacity: 100, "stroke-width": 2});
  SnameLine.movePoints([[0,LabelLeft+450,pY+190],[1,LabelLeft+120+440,pY+90 ]]);
  SIDlLine.movePoints([[0,LabelLeft+360, pY+190] ,[1,LabelLeft-100+380,pY+90 ]]);
  AddLine.movePoints([[0,LabelLeft+400, pY+190] ,[1,LabelLeft+400, pY+165]]);
  SnameLine.show();
  SIDlLine.show();
  AddLine.show();
  av.recorded();
});