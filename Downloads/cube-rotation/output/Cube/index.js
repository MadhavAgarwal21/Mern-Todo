"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Events = require("../Halogen.HTML.Events/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Halogen_Svg_Attributes = require("../Halogen.Svg.Attributes/index.js");
var Halogen_Svg_Elements = require("../Halogen.Svg.Elements/index.js");
var $$Math = require("../Math/index.js");
var Tick = (function () {
    function Tick(value0) {
        this.value0 = value0;
    };
    Tick.create = function (value0) {
        return new Tick(value0);
    };
    return Tick;
})();
var Other = (function () {
    function Other(value0) {
        this.value0 = value0;
    };
    Other.create = function (value0) {
        return new Other(value0);
    };
    return Other;
})();
var X = (function () {
    function X() {

    };
    X.value = new X();
    return X;
})();
var Y = (function () {
    function Y() {

    };
    Y.value = new Y();
    return Y;
})();
var Z = (function () {
    function Z() {

    };
    Z.value = new Z();
    return Z;
})();

// Events
var DecAngVelocity = (function () {
    function DecAngVelocity(value0) {
        this.value0 = value0;
    };
    DecAngVelocity.create = function (value0) {
        return new DecAngVelocity(value0);
    };
    return DecAngVelocity;
})();

// Events
var IncAngVelocity = (function () {
    function IncAngVelocity(value0) {
        this.value0 = value0;
    };
    IncAngVelocity.create = function (value0) {
        return new IncAngVelocity(value0);
    };
    return IncAngVelocity;
})();

// Values
var viewBoxSize = 600.0;
var viewCenter = {
    x: viewBoxSize / 2.0,
    y: viewBoxSize / 2.0
};
var rotate = function (v) {
    var rotateInPlane = function (axis1) {
        return function (axis2) {
            return function (ang) {
                return new Data_Tuple.Tuple(axis1 * $$Math.cos(ang) - axis2 * $$Math.sin(ang), axis2 * $$Math.cos(ang) + axis1 * $$Math.sin(ang));
            };
        };
    };
    var rotateX = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.y)(v1.z)(ang);
            return {
                x: v1.x,
                y: v2.value0,
                z: v2.value1
            };
        };
    };
    var rotateY = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.z)(ang);
            return {
                x: v2.value0,
                y: v1.y,
                z: v2.value1
            };
        };
    };
    var rotateZ = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.y)(ang);
            return {
                x: v2.value0,
                y: v2.value1,
                z: v1.z
            };
        };
    };
    var $103 = rotateZ(v.za);
    var $104 = rotateY(v.ya);
    var $105 = rotateX(v.xa);
    return function ($106) {
        return $103($104($105($106)));
    };
};
var rotateShape = function (vertices) {
    return function (ang) {
        return Data_Functor.map(Data_Functor.functorArray)(rotate(ang))(vertices);
    };
};

//-------------------------------------------------------------------------------------
var renderView = function (state) {
    var renderButton = function (label) {
        return function (query) {
            return Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title(label), Halogen_HTML_Events.onClick(function (v) {
                return query;
            }) ])([ Halogen_HTML_Core.text(label) ]);
        };
    };
    
    // parallel projection
var project = function (p) {
        return {
            x: p.x + viewCenter.x,
            y: p.y + viewCenter.y
        };
    };
    var getPoint = function (maybePoint) {
        var $$default = {
            x: 100.0,
            y: 100.0
        };
        return Data_Maybe.fromMaybe($$default)(maybePoint);
    };
    var drawVertex = function (idx) {
        return function (v) {
            return Halogen_Svg_Elements.g([  ])([ Halogen_Svg_Elements.text([ Halogen_Svg_Attributes.x(v.x + 5.0), Halogen_Svg_Attributes.y(v.y - 5.0), Halogen_Svg_Attributes.fill(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(150, 150, 150))) ])([ Halogen_HTML_Core.text(Data_Show.show(Data_Show.showInt)(idx)) ]), Halogen_Svg_Elements.circle([ Halogen_Svg_Attributes.r(3.0), Halogen_Svg_Attributes.cx(v.x), Halogen_Svg_Attributes.cy(v.y), Halogen_Svg_Attributes.fill(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(100, 100, 100))) ]) ]);
        };
    };
    var drawVertices = function (vert2Ds) {
        return Data_Array.mapWithIndex(drawVertex)(vert2Ds);
    };
    var drawLine = function (a) {
        return function (b) {
            return Halogen_Svg_Elements.line([ Halogen_Svg_Attributes.x1(a.x), Halogen_Svg_Attributes.x2(b.x), Halogen_Svg_Attributes.y1(a.y), Halogen_Svg_Attributes.y2(b.y), Halogen_Svg_Attributes.stroke(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(50, 50, 50))) ]);
        };
    };
    var drawEdges = function (edges) {
        return function (verts) {
            var connectedVerts = Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return new Data_Tuple.Tuple(Data_Array.index(verts)(v.value0), Data_Array.index(verts)(v.value1));
            })(edges);
            return Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return drawLine(getPoint(v.value0))(getPoint(v.value1));
            })(connectedVerts);
        };
    };
    var drawCube = function (edges) {
        return function (vert2Ds) {
            return Data_Semigroup.append(Data_Semigroup.semigroupArray)(drawEdges(edges)(vert2Ds))(drawVertices(vert2Ds));
        };
    };
    var vert2Ds = Data_Functor.map(Data_Functor.functorArray)(project)(state.shape.vertices);
    return Halogen_HTML_Elements.div([  ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ renderButton("rotX++")(new IncAngVelocity(X.value)), renderButton("rotY++")(new IncAngVelocity(Y.value)), renderButton("rotZ++")(new IncAngVelocity(Z.value)) ])([ Halogen_Svg_Elements.svg([ Halogen_Svg_Attributes.viewBox(0.0)(0.0)(viewBoxSize)(viewBoxSize) ])([ Halogen_Svg_Elements.g([  ])(drawCube(state.shape.edges)(vert2Ds)) ]) ]));
};
var oneDegInRad = 1.745329255e-2;
var tenDegInRad = oneDegInRad * 10.0;
var initCube = {
    shape: {
        vertices: [ {
            x: 100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: -100.0
        } ],
        edges: [ new Data_Tuple.Tuple(0, 1), new Data_Tuple.Tuple(0, 2), new Data_Tuple.Tuple(0, 4), new Data_Tuple.Tuple(1, 5), new Data_Tuple.Tuple(1, 3), new Data_Tuple.Tuple(2, 3), new Data_Tuple.Tuple(2, 6), new Data_Tuple.Tuple(4, 5), new Data_Tuple.Tuple(4, 6), new Data_Tuple.Tuple(3, 7), new Data_Tuple.Tuple(6, 7), new Data_Tuple.Tuple(5, 7) ]
    },
    angVel: {
        xa: tenDegInRad,
        ya: tenDegInRad,
        za: tenDegInRad
    },
    forward: true
};
var frameRate = 200.0;
var dampenPercent = 1.0 - 0.9 / frameRate;
var dampenAngVelocity = function (v) {
    var dampen = function (ang) {
        return ang * dampenPercent;
    };
    return {
        xa: dampen(v.xa),
        ya: dampen(v.ya),
        za: dampen(v.za)
    };
};
var anglePerFrame = function (v) {
    return {
        xa: v.xa / frameRate,
        ya: v.ya / frameRate,
        za: v.za / frameRate
    };
};
var accelerateBy = oneDegInRad * 50.0;
var cubes = (function () {
    var handleQuery = function (v) {
        if (v instanceof Tick) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                var newShape = {
                    edges: cube.shape.edges,
                    vertices: rotateShape(cube.shape.vertices)(anglePerFrame(cube.angVel))
                };
                var newCube = (function () {
                    var $70 = {};
                    for (var $71 in cube) {
                        if ({}.hasOwnProperty.call(cube, $71)) {
                            $70[$71] = cube[$71];
                        };
                    };
                    $70.angVel = dampenAngVelocity(cube.angVel);
                    $70.shape = newShape;
                    return $70;
                })();
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.put(Halogen_Query_HalogenM.monadStateHalogenM)(newCube))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(new Data_Maybe.Just(v.value0));
                });
            });
        };
        if (v instanceof Other) {
            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(new Data_Maybe.Just(v.value0));
        };
        throw new Error("Failed pattern match at Cube (line 164, column 23 - line 180, column 26): " + [ v.constructor.name ]);
    };
    var handleAction = function (query) {
        if (query instanceof DecAngVelocity) {
            return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (state) {
                return state;
            });
        };
        if (query instanceof IncAngVelocity) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (query.value0 instanceof X) {
                        var $84 = {};
                        for (var $85 in c) {
                            if ({}.hasOwnProperty.call(c, $85)) {
                                $84[$85] = c[$85];
                            };
                        };
                        $84.angVel = (function () {
                            var $81 = {};
                            for (var $82 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $82)) {
                                    $81[$82] = c["angVel"][$82];
                                };
                            };
                            $81.xa = cube.angVel.xa + accelerateBy;
                            return $81;
                        })();
                        return $84;
                    };
                    if (query.value0 instanceof Y) {
                        var $90 = {};
                        for (var $91 in c) {
                            if ({}.hasOwnProperty.call(c, $91)) {
                                $90[$91] = c[$91];
                            };
                        };
                        $90.angVel = (function () {
                            var $87 = {};
                            for (var $88 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $88)) {
                                    $87[$88] = c["angVel"][$88];
                                };
                            };
                            $87.ya = cube.angVel.ya + accelerateBy;
                            return $87;
                        })();
                        return $90;
                    };
                    if (query.value0 instanceof Z) {
                        var $96 = {};
                        for (var $97 in c) {
                            if ({}.hasOwnProperty.call(c, $97)) {
                                $96[$97] = c[$97];
                            };
                        };
                        $96.angVel = (function () {
                            var $93 = {};
                            for (var $94 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $94)) {
                                    $93[$94] = c["angVel"][$94];
                                };
                            };
                            $93.za = cube.angVel.za + accelerateBy;
                            return $93;
                        })();
                        return $96;
                    };
                    throw new Error("Failed pattern match at Cube (line 156, column 27 - line 159, column 73): " + [ query.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                });
            });
        };
        throw new Error("Failed pattern match at Cube (line 150, column 30 - line 161, column 30): " + [ query.constructor.name ]);
    };
    return Halogen_Component.mkComponent({
        initialState: Data_Function["const"](initCube),
        render: renderView,
        "eval": Halogen_Component.mkEval({
            handleAction: handleAction,
            handleQuery: handleQuery,
            receive: Halogen_Component.defaultEval.receive,
            initialize: Halogen_Component.defaultEval.initialize,
            finalize: Halogen_Component.defaultEval.finalize
        })
    });
})();
module.exports = {
    X: X,
    Y: Y,
    Z: Z,
    viewBoxSize: viewBoxSize,
    viewCenter: viewCenter,
    frameRate: frameRate,
    oneDegInRad: oneDegInRad,
    tenDegInRad: tenDegInRad,
    accelerateBy: accelerateBy,
    dampenPercent: dampenPercent,
    initCube: initCube,
    Tick: Tick,
    Other: Other,
    DecAngVelocity: DecAngVelocity,
    IncAngVelocity: IncAngVelocity,
    cubes: cubes,
    rotateShape: rotateShape,
    rotate: rotate,
    anglePerFrame: anglePerFrame,
    dampenAngVelocity: dampenAngVelocity,
    renderView: renderView
};
