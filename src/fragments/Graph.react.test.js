const rewire = require("rewire")
const Graph_react = rewire("./Graph.react")
const filterEventData = Graph_react.__get__("filterEventData")
// @ponicode
describe("filterEventData", () => {
    test("0", () => {
        let object = [{ customdata: "Michael" }, { customdata: "Jean-Philippe" }, { customdata: "Jean-Philippe" }, { customdata: "Edmond" }, { customdata: "George" }, { customdata: "Anas" }]
        let object2 = [{ pointNumber: 100, pointNumbers: 0 }, { pointNumber: -100, pointNumbers: 100 }, { pointNumber: -5.48, pointNumbers: 100 }, { pointNumber: -100, pointNumbers: -100 }, { pointNumber: -5.48, pointNumbers: 100 }, { pointNumber: -5.48, pointNumbers: 1 }]
        let callFunction = () => {
            filterEventData({ data: object }, { range: "aniyah", lassoPoints: "George", points: object2 }, "restyle")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [{ customdata: "George" }, { customdata: "Edmond" }, { customdata: "Anas" }, { customdata: "Michael" }, { customdata: "Jean-Philippe" }, { customdata: "Jean-Philippe" }]
        let object2 = [{ pointNumber: -5.48, pointNumbers: 1 }, { pointNumber: 0, pointNumbers: 0 }, { pointNumber: 1, pointNumbers: 100 }, { pointNumber: 100, pointNumbers: 0 }, { pointNumber: 100, pointNumbers: 0 }, { pointNumber: -100, pointNumbers: -5.48 }]
        let callFunction = () => {
            filterEventData({ data: object }, { range: "aniyah", lassoPoints: "Michael", points: object2 }, "restyle")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [{ customdata: [true, false, true, false] }, { customdata: [false, true, false, false] }, { customdata: [true, true, true, false] }, { customdata: [false, true, false, false] }, { customdata: [true, true, false, false] }, { customdata: [false, true, true, true] }]
        let object2 = [{ pointNumber: 0, pointNumbers: 1 }, { pointNumber: 1, pointNumbers: 0 }, { pointNumber: -100, pointNumbers: 0 }, { pointNumber: -100, pointNumbers: 100 }, { pointNumber: -100, pointNumbers: -5.48 }, { pointNumber: 100, pointNumbers: 0 }]
        let callFunction = () => {
            filterEventData({ data: object }, { range: "aleen", lassoPoints: "Michael", points: object2 }, "restyle")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [{ customdata: [false, false, true, false] }, { customdata: [false, true, false, true] }, { customdata: [false, false, true, false] }, { customdata: [true, false, false, false] }, { customdata: [true, false, false, false] }, { customdata: [false, true, false, false] }]
        let object2 = [{ pointNumber: 100, pointNumbers: 100 }, { pointNumber: -100, pointNumbers: -100 }, { pointNumber: -100, pointNumbers: -100 }, { pointNumber: -100, pointNumbers: 100 }, { pointNumber: -100, pointNumbers: -5.48 }, { pointNumber: 1, pointNumbers: 100 }]
        let callFunction = () => {
            filterEventData({ data: object }, { range: "aleen", lassoPoints: "Pierre Edouard", points: object2 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [{ customdata: "Pierre Edouard" }, { customdata: "Anas" }, { customdata: "George" }, { customdata: "George" }, { customdata: "Pierre Edouard" }, { customdata: "Anas" }]
        let object2 = [{ pointNumber: 1, pointNumbers: -5.48 }, { pointNumber: 1, pointNumbers: -100 }, { pointNumber: -5.48, pointNumbers: -5.48 }, { pointNumber: 0, pointNumbers: 1 }, { pointNumber: 0, pointNumbers: 0 }, { pointNumber: -100, pointNumbers: 100 }]
        let callFunction = () => {
            filterEventData({ data: object }, { range: "aleen", lassoPoints: "Anas", points: object2 }, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filterEventData({ data: [] }, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extend", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.extend({ key5: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.extend({ key5: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.extend({ key5: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.extend({ key5: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.extend({ key5: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.extend(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getConfig", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getConfig("services_recontextualize_front_end.gif", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getConfig("png.mpg4", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getConfig("bus_account.mpe", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getConfig("services_recontextualize_front_end.gif", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getConfig("png.mpg4", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getConfig(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getLayout", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getLayout(false, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getLayout(false, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getLayout(0, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getLayout(true, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getLayout(true, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getLayout(NaN, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getConfigOverride", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getConfigOverride(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getConfigOverride(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getConfigOverride(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getLayoutOverride", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getLayoutOverride(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getLayoutOverride(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getLayoutOverride(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isResponsive", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isResponsive("reply_click()")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.isResponsive(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("bindEvents", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.bindEvents()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("shouldComponentUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate({ style: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", loading_state: "Florida" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate({ style: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", loading_state: "Alabama" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate({ style: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", loading_state: "Île-de-France" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate({ style: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", loading_state: "Abruzzo" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("UNSAFE_componentWillReceiveProps", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "Foo bar", id: 56784, extendData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", figure: "DELETE FROM ", _dashprivate_transformConfig: "v4.0.0-rc.4", _dashprivate_transformFigure: "Expressway" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "Foo bar", id: 987650, extendData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", figure: "INSERT INTO [", _dashprivate_transformConfig: "4.0.0-beta1\t", _dashprivate_transformFigure: "Port" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "Foo bar", id: 12, extendData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", figure: "INSERT INTO ", _dashprivate_transformConfig: "v1.2.4", _dashprivate_transformFigure: "Lights" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "This is a Text", id: "a1969970175", extendData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", figure: "SET IDENTITY_INSERT %s OFF", _dashprivate_transformConfig: "1.0.0", _dashprivate_transformFigure: "Harbors" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "This is a Text", id: 12345, extendData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", figure: "SELECT * FROM %s;", _dashprivate_transformConfig: "v1.2.4", _dashprivate_transformFigure: "Lights" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillReceiveProps({ key1: "", id: NaN, extendData: "", figure: "", _dashprivate_transformConfig: "", _dashprivate_transformFigure: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new Graph_react.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidUpdate("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.componentDidUpdate("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.componentDidUpdate("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.componentDidUpdate("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.componentDidUpdate("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentDidUpdate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
