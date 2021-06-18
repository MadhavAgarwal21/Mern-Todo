"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Cube = require("../Cube/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Timer = require("../Effect.Timer/index.js");
var Halogen_Aff_Util = require("../Halogen.Aff.Util/index.js");
var Halogen_Query = require("../Halogen.Query/index.js");
var Halogen_VDom_Driver = require("../Halogen.VDom.Driver/index.js");
var frameRate = 200;
var main = Halogen_Aff_Util.runHalogenAff(Control_Bind.bind(Effect_Aff.bindAff)(Halogen_Aff_Util.awaitBody)(function (body) {
    return Control_Bind.bind(Effect_Aff.bindAff)(Halogen_VDom_Driver.runUI(Cube.cubes)(Data_Unit.unit)(body))(function (cube) {
        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Timer.setInterval(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(1000)(frameRate))(Halogen_Aff_Util.runHalogenAff(cube.query(Halogen_Query.mkTell(Cube.Tick.create)))));
    });
}));
module.exports = {
    frameRate: frameRate,
    main: main
};
