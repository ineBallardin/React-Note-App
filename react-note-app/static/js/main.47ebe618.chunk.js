(this["webpackJsonpnotes-app"] = this["webpackJsonpnotes-app"] || []).push([[0], {
    101: function(e, t, n) {},
    109: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0)
          , o = n.n(i)
          , a = n(10)
          , r = n.n(a)
          , c = (n(101),
        n(149))
          , s = n(80)
          , l = n.n(s)
          , d = n(151)
          , u = n(147)
          , m = Object(u.a)({
            formControl: {
                width: "100%",
                position: "relative",
                margin: 0,
                boxShadow: "0 3px 6px #00000029"
            },
            searchIcon: {
                color: "#000",
                opacity: ".3",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: ".5em",
                zIndex: "1"
            },
            searchInput: {
                "& > input": {
                    fontSize: 18,
                    padding: ".7em 2.5em"
                }
            }
        })
          , p = n(11)
          , b = n(85)
          , j = n(34)
          , g = n(63)
          , h = [{
            id: 1,
            title: "Sagittis nam",
            description: "porttitor pede justo eu massa donec dapibus duis at velit eu proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus duis at velit eu proin at turpis a pede posuere",
            category: "Work",
            completed: !0,
            date: "2020-12-07T12:39:57Z"
        }, {
            id: 2,
            title: "Ornare consequat lectus in",
            description: "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
            category: "Home",
            completed: !1,
            date: "2020-08-02T11:45:43Z"
        }, {
            id: 3,
            title: "Integer ac neque",
            description: "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
            category: "Personal",
            completed: !0,
            date: "2020-07-26T09:27:58Z"
        }, {
            id: 4,
            title: "In purus eu magna",
            description: "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
            category: "Work",
            completed: !1,
            date: "2020-12-29T21:35:29Z"
        }, {
            id: 5,
            title: "Neque aenean auctor gravida",
            description: "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
            category: "Personal",
            completed: !0,
            date: "2020-05-09T07:14:59Z"
        }, {
            id: 6,
            title: "Justo in blandit",
            description: "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
            category: "Home",
            completed: !1,
            date: "2020-06-03T04:44:00Z"
        }, {
            id: 7,
            title: "Libero rutrum",
            description: "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
            category: "Home",
            completed: !1,
            date: "2020-12-25T09:40:01Z"
        }, {
            id: 8,
            title: "Turpis a",
            description: "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
            category: "Home",
            completed: !1,
            date: "2020-09-22T13:12:17Z"
        }, {
            id: 9,
            title: "Ipsum primis",
            description: "consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
            category: "Personal",
            completed: !1,
            date: "2020-06-19T01:47:51Z"
        }, {
            id: 10,
            title: "Sagittis nam",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor",
            category: "Personal",
            completed: !1,
            date: "2021-01-27T05:46:34Z"
        }]
          , f = Object(g.b)({
            name: "notes",
            initialState: {
                all: [],
                sorted: [],
                searchValue: "",
                activeCategory: "All",
                showNotesForm: !1,
                noteToEdit: void 0,
                pending: !0
            },
            reducers: {
                setSearchValue: function(e, t) {
                    e.searchValue = t.payload
                },
                setActiveCategory: function(e, t) {
                    e.activeCategory = t.payload,
                    localStorage.setItem("activeCategory", t.payload)
                },
                toggleNotesForm: function(e) {
                    e.showNotesForm = !e.showNotesForm,
                    e.noteToEdit = void 0
                },
                createUpdateNote: function(e, t) {
                    var n = O();
                    if (t.payload.id)
                        e.all.forEach((function(i, o) {
                            if (i.id === t.payload.id) {
                                var a = Object(j.a)(Object(j.a)({}, i), t.payload);
                                a.date = n,
                                e.all[o] = a
                            }
                        }
                        ));
                    else {
                        var i = x(e.all);
                        e.all.push(Object(j.a)({
                            id: i,
                            completed: !1,
                            date: n
                        }, t.payload))
                    }
                },
                editNote: function(e, t) {
                    e.noteToEdit = e.all.filter((function(e) {
                        return e.id === t.payload
                    }
                    ))[0],
                    e.showNotesForm = !0
                },
                toggleNoteStatus: function(e, t) {
                    e.all.forEach((function(e) {
                        e.id === t.payload && (e.completed = !e.completed)
                    }
                    ))
                },
                deleteNote: function(e, t) {
                    e.all = e.all.filter((function(e) {
                        return e.id !== t.payload
                    }
                    ))
                },
                sortAndFilter: function(e) {
                    var t = Object(b.a)(e.all).sort((function(e, t) {
                        return e.completed === t.completed ? new Date(t.date) - new Date(e.date) : t.completed ? -1 : 1
                    }
                    ));
                    "All" !== e.activeCategory && (t = t.filter((function(t) {
                        return t.category === e.activeCategory
                    }
                    ))),
                    e.searchValue && (t = t.filter((function(t) {
                        var n = t.title
                          , i = t.description;
                        return n.toLowerCase().includes(e.searchValue.toLowerCase()) || i.toLowerCase().includes(e.searchValue.toLowerCase())
                    }
                    ))),
                    e.sorted = t
                },
                saveNotes: function(e) {
                    localStorage.setItem("notes", JSON.stringify(e.all))
                },
                getNotes: function(e) {
                    var t, n = localStorage.getItem("notes");
                    e.all = n ? JSON.parse(n) : [],
                    e.activeCategory = null !== (t = localStorage.getItem("activeCategory")) && void 0 !== t ? t : "All",
                    e.pending = !1
                },
                mockNotes: function(e) {
                    e.all = h,
                    localStorage.setItem("notes", JSON.stringify(h))
                }
            }
        })
          , x = function(e) {
            return Math.max.apply(Math, e.map((function(e) {
                return e.id
            }
            ))) + 1
        }
          , O = function() {
            return (new Date).getTime()
        }
          , v = f.actions
          , y = v.setSearchValue
          , N = v.setActiveCategory
          , C = v.toggleNotesForm
          , S = v.createUpdateNote
          , w = v.editNote
          , k = v.toggleNoteStatus
          , T = v.deleteNote
          , F = v.sortAndFilter
          , D = v.saveNotes
          , A = v.getNotes
          , B = v.mockNotes
          , I = f.reducer
          , q = n(2);
        function W() {
            var e = m()
              , t = Object(p.b)();
            return Object(q.jsxs)(c.a, {
                className: e.formControl,
                children: [Object(q.jsx)(l.a, {
                    className: e.searchIcon
                }), Object(q.jsx)(d.a, {
                    placeholder: "Search notes\u2026",
                    className: e.searchInput,
                    onChange: function(e) {
                        return n = e.target.value,
                        void t(y(n));
                        var n
                    }
                })]
            })
        }
        var z = n(153)
          , E = n(17)
          , M = Object(u.a)((function(e) {
            return Object(E.a)({
                root: {
                    "& > *": {
                        marginRight: e.spacing(2)
                    }
                },
                button: {
                    minWidth: "89px",
                    position: "relative",
                    fontWeight: 400,
                    textTransform: "none",
                    "&.MuiButton-contained": {
                        color: "#fff"
                    }
                },
                indicator: {
                    position: "absolute",
                    bottom: "-.4em",
                    fontSize: "2em",
                    lineHeight: 1,
                    color: "green"
                }
            }, e.breakpoints.down("xs"), {
                root: {
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                },
                button: {
                    width: "45%",
                    marginBottom: "1.5em",
                    marginRight: 0,
                    padding: "12px 8px"
                }
            })
        }
        ))
          , L = n(152)
          , Z = Object(L.a)({
            wrapper: {
                width: "100%",
                maxWidth: "824px"
            },
            palette: {
                primary: {
                    main: "#69BCFF",
                    dark: "#2196F3"
                },
                success: {
                    main: "#66BB6A"
                },
                danger: {
                    main: "#FF9100"
                },
                info: {
                    main: "#5C6BC0"
                },
                grey: {
                    main: "#282E2999"
                }
            },
            typography: {
                body1: {
                    fontSize: "1.2em"
                },
                body2: {
                    fontSize: ".98em"
                }
            }
        });
        function H(e) {
            var t = e.name
              , n = e.type
              , i = e.active
              , o = e.displayIndicator
              , a = void 0 === o || o
              , r = e.onClick
              , c = M()
              , s = Z.palette[n].main;
            return Object(q.jsx)(q.Fragment, {
                children: Object(q.jsxs)(z.a, {
                    className: c.button,
                    variant: i ? "contained" : "text",
                    style: {
                        backgroundColor: i ? s : "transparent"
                    },
                    onClick: function() {
                        return r(t)
                    },
                    disableElevation: !0,
                    children: [Object(q.jsx)("span", {
                        children: t
                    }), !i && a && Object(q.jsx)("span", {
                        className: c.indicator,
                        style: {
                            color: s
                        },
                        children: "\u2022"
                    })]
                })
            })
        }
        var V = {
            Home: "danger",
            Work: "info",
            Personal: "success"
        };
        function P() {
            var e = M()
              , t = Object.keys(V)
              , n = Object(p.c)((function(e) {
                return e.notes.activeCategory
            }
            ))
              , i = Object(p.b)();
            return Object(q.jsxs)("div", {
                className: e.root,
                children: [Object(q.jsx)(H, {
                    name: "All",
                    type: "primary",
                    active: "All" === n,
                    onClick: function() {
                        return i(N("All"))
                    },
                    displayIndicator: !1
                }), t.map((function(e, t) {
                    return Object(q.jsx)(H, {
                        name: e,
                        type: V[e],
                        active: n === e,
                        onClick: function() {
                            return i(N(e))
                        }
                    }, t)
                }
                ))]
            })
        }
        var R = n(81)
          , J = n.n(R)
          , U = Object(u.a)((function(e) {
            return Object(E.a)({
                root: {
                    color: "#fff",
                    float: "right",
                    backgroundColor: e.palette.primary.dark
                }
            }, e.breakpoints.down("xs"), {
                root: {
                    width: "100%",
                    padding: "12px 8px"
                }
            })
        }
        ));
        function Y() {
            var e = U()
              , t = Object(p.b)();
            return Object(q.jsx)(q.Fragment, {
                children: Object(q.jsx)(z.a, {
                    variant: "contained",
                    color: "primary",
                    className: e.root,
                    startIcon: Object(q.jsx)(J.a, {}),
                    onClick: function() {
                        return t(C())
                    },
                    children: "Add note"
                })
            })
        }
        var K = n(154)
          , $ = Object(u.a)({
            root: {
                marginTop: "1em"
            },
            infoText: {
                marginBottom: ".5em",
                fontWeight: 500,
                color: "#00000099",
                fontSize: "1.2em"
            }
        });
        function G() {
            var e = $()
              , t = Object(p.c)((function(e) {
                return e.notes.all
            }
            ))
              , n = t.length
              , i = t.filter((function(e) {
                return e.completed
            }
            )).length
              , o = 100 / n * i
              , a = n === i ? "You have completed all notes" : "You have ".concat(i, "/").concat(n, " notes completed");
            return Object(q.jsxs)("div", {
                className: e.root,
                style: {
                    display: n ? "block" : "none"
                },
                children: [Object(q.jsx)("div", {
                    className: e.infoText,
                    children: a
                }), Object(q.jsx)(K.a, {
                    variant: "determinate",
                    value: o
                })]
            })
        }
        var Q = n(163)
          , X = n(25)
          , _ = n(161)
          , ee = n(162)
          , te = n(168)
          , ne = n(156)
          , ie = n(83)
          , oe = n.n(ie)
          , ae = n(87)
          , re = n(155)
          , ce = n(169)
          , se = n(160)
          , le = n(158)
          , de = n(159)
          , ue = n(157)
          , me = n(82)
          , pe = n.n(me)
          , be = Object(u.a)({
            root: {
                position: "relative",
                color: "#fff",
                boxShadow: "0 3px 6px #00000029",
                overflow: "visible"
            },
            iconBtn: {
                position: "absolute",
                top: ".4em",
                color: "#fff",
                padding: ".2em",
                opacity: ".6",
                "&.Mui-checked": {
                    color: "inherit"
                }
            },
            title: {
                fontSize: "1.2em",
                color: "inherit",
                fontWeight: 500,
                marginLeft: "2em",
                marginRight: "4em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer"
            },
            noteDescription: {
                height: "5.7em",
                overflow: "hidden"
            },
            noteDate: {
                fontWeight: 500,
                opacity: ".6",
                margin: "1em 0 -.6em"
            },
            completed: {
                textDecoration: "line-through"
            },
            deleteDialog: {
                "& .MuiDialog-paper": {
                    borderRadius: 0,
                    boxShadow: "0 3px 6px #00000029"
                },
                "& .MuiDialog-paperWidthSm": {
                    width: "100%",
                    maxWidth: "350px",
                    marginLeft: 0,
                    marginRight: 0
                },
                "& .MuiDialogTitle-root": {
                    fontSize: "1em",
                    color: "#00000099"
                }
            }
        });
        function je(e) {
            var t = e.title
              , n = e.onDelete
              , o = be()
              , a = Object(i.useState)(!1)
              , r = Object(X.a)(a, 2)
              , c = r[0]
              , s = r[1]
              , l = function() {
                return s(!1)
            };
            return Object(q.jsx)(q.Fragment, {
                children: Object(q.jsx)(re.a, {
                    onClickAway: l,
                    children: Object(q.jsxs)("div", {
                        children: [Object(q.jsx)(ne.a, {
                            "aria-label": "delete",
                            className: o.iconBtn,
                            style: {
                                right: ".2em"
                            },
                            onClick: function() {
                                return s(!0)
                            },
                            type: "button",
                            children: Object(q.jsx)(pe.a, {})
                        }), Object(q.jsxs)(ce.a, {
                            open: c,
                            onClose: l,
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            className: o.deleteDialog,
                            children: [Object(q.jsx)(ue.a, {
                                id: "alert-dialog-title",
                                disableTypography: !0,
                                children: "Delete note?"
                            }), Object(q.jsx)(le.a, {
                                children: Object(q.jsx)(de.a, {
                                    id: "alert-dialog-description",
                                    children: t
                                })
                            }), Object(q.jsxs)(se.a, {
                                children: [Object(q.jsx)(z.a, {
                                    onClick: l,
                                    color: "primary",
                                    children: "Cancel"
                                }), Object(q.jsx)(z.a, {
                                    onClick: function() {
                                        l(),
                                        n()
                                    },
                                    color: "primary",
                                    autoFocus: !0,
                                    children: "Delete"
                                })]
                            })]
                        })]
                    })
                })
            })
        }
        var ge = function(e) {
            var t = new Date(e).toDateString().split(" ")
              , n = Object(X.a)(t, 4);
            n[0];
            return n[1] + " " + n[2] + ", " + n[3]
        };
        function he(e) {
            var t = e.note
              , n = e.onEdit
              , o = e.onDelete
              , a = be()
              , r = Object(p.b)()
              , c = t.completed ? Z.palette.grey.main : Z.palette[V[t.category]].main
              , s = Object(i.useState)(t.completed)
              , l = Object(X.a)(s, 2)
              , d = l[0]
              , u = l[1]
              , m = function() {
                u(!d),
                r(k(t.id))
            };
            return Object(q.jsx)(_.a, {
                className: a.root,
                style: {
                    backgroundColor: c
                },
                children: Object(q.jsxs)(ee.a, {
                    className: d ? a.completed : "",
                    children: [Object(q.jsx)(te.a, {
                        checked: d,
                        onChange: m,
                        className: a.iconBtn,
                        style: {
                            left: ".2em"
                        }
                    }), Object(q.jsx)(ne.a, {
                        "aria-label": "edit",
                        className: a.iconBtn,
                        style: {
                            right: "1.8em"
                        },
                        onClick: function() {
                            return n(t)
                        },
                        children: Object(q.jsx)(oe.a, {})
                    }), Object(q.jsx)(je, {
                        title: t.title,
                        onDelete: function() {
                            return o(t)
                        }
                    }), Object(q.jsx)(ae.a, {
                        className: a.title,
                        gutterBottom: !0,
                        onClick: m,
                        children: t.title
                    }), Object(q.jsx)(ae.a, {
                        variant: "body2",
                        component: "p",
                        className: a.noteDescription,
                        children: t.description
                    }), Object(q.jsx)(ae.a, {
                        variant: "body1",
                        component: "div",
                        className: a.noteDate,
                        children: ge(t.date)
                    })]
                })
            })
        }
        var fe = n.p + "static/media/add-note-illustration.f6b9abf9.svg"
          , xe = n.p + "static/media/search-image.26d77b9a.svg"
          , Oe = Object(u.a)((function(e) {
            return Object(E.a)({
                root: {
                    position: "absolute",
                    right: "33%",
                    bottom: "3%"
                }
            }, e.breakpoints.down("xs"), {
                root: {
                    right: "13%"
                }
            })
        }
        ));
        function ve() {
            var e = Oe()
              , t = Object(p.b)();
            return Object(q.jsx)("div", {
                className: e.root,
                children: Object(q.jsx)(z.a, {
                    variant: "contained",
                    color: "secondary",
                    size: "large",
                    onClick: function() {
                        return t(B())
                    },
                    children: "MOCK NOTES"
                })
            })
        }
        var ye = Object(u.a)((function(e) {
            return Object(E.a)({
                root: {
                    position: "relative",
                    textAlign: "center"
                },
                heading: {
                    marginTop: ".5em",
                    color: "#00000099",
                    opacity: .6
                },
                illustration: {
                    marginTop: "4em"
                }
            }, e.breakpoints.down("xs"), {
                heading: {
                    marginTop: "0",
                    fontSize: "2em"
                }
            })
        }
        ));
        function Ne() {
            var e = ye()
              , t = Object(p.c)((function(e) {
                return e.notes.all
            }
            ))
              , n = t.length ? "Couldn\u2019t find any notes" : "You don\u2019t have any notes"
              , i = t.length ? xe : fe;
            return Object(q.jsxs)(Q.a, {
                item: !0,
                xs: 12,
                className: e.root,
                children: [Object(q.jsx)(ae.a, {
                    variant: "h4",
                    className: e.heading,
                    children: n
                }), Object(q.jsx)("img", {
                    className: e.illustration,
                    src: i,
                    alt: n
                }), !t.length && Object(q.jsx)(ve, {})]
            })
        }
        var Ce = n(84)
          , Se = n.n(Ce)
          , we = Object(u.a)((function(e) {
            return {
                root: {
                    textAlign: "center",
                    margin: "2em auto"
                },
                icon: {
                    fontSize: "5em",
                    color: e.palette.primary.main,
                    animation: "$spin 1500ms infinite linear"
                },
                "@keyframes spin": {
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: "rotate(360deg)"
                    }
                }
            }
        }
        ));
        function ke() {
            var e = we();
            return Object(q.jsx)("div", {
                className: e.root,
                children: Object(q.jsx)(Se.a, {
                    className: e.icon
                })
            })
        }
        function Te() {
            var e = Object(p.c)((function(e) {
                return e.notes.sorted
            }
            ))
              , t = Object(p.c)((function(e) {
                return e.notes.pending
            }
            ))
              , n = Object(p.b)();
            return Object(i.useEffect)((function() {
                n(A())
            }
            ), [n]),
            t ? Object(q.jsx)(ke, {}) : Object(q.jsx)(Q.a, {
                container: !0,
                spacing: 2,
                children: 0 === e.length ? Object(q.jsx)(Ne, {}) : e.map((function(e) {
                    return Object(q.jsx)(Q.a, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: Object(q.jsx)(he, {
                            note: e,
                            onEdit: function(e) {
                                return n(w(e.id))
                            },
                            onDelete: function(e) {
                                return n(T(e.id))
                            }
                        })
                    }, e.id)
                }
                ))
            })
        }
        var Fe = n(112)
          , De = n(166)
          , Ae = n(170)
          , Be = Object(u.a)((function(e) {
            return {
                root: {
                    "& .MuiDialog-paper": {
                        borderRadius: 4,
                        boxShadow: "0 3px 6px #00000029"
                    },
                    "& .MuiDialog-paperWidthSm": {
                        maxWidth: e.wrapper.maxWidth,
                        width: e.wrapper.width,
                        margin: "15px"
                    },
                    "& .MuiDialogTitle-root": {
                        fontSize: "1.5em",
                        fontWeight: 400,
                        color: "#00000099",
                        borderBottomWidth: "0.5px",
                        borderBottomStyle: "solid",
                        borderBottomColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                input: {
                    width: "100%",
                    minHeight: 44,
                    padding: ".2em 1em",
                    fontSize: "1.25em",
                    color: "#00000099",
                    background: "#F4F4F4",
                    border: "none",
                    borderRadius: "4px 4px 0 0",
                    marginBottom: "1.5em",
                    lineHeight: "1.5",
                    alignItems: "center",
                    "& .MuiInputBase-input::placeholder": {
                        opacity: .9
                    },
                    "&:focus, .MuiSelect-select:focus": {
                        outline: "none",
                        background: "#F4F4F4"
                    },
                    "&:before, &:after": {
                        display: "none"
                    }
                },
                textarea: {
                    resize: "none",
                    paddingTop: "1em",
                    paddingBottom: "2em",
                    marginBottom: 0,
                    fontSize: "1.25em",
                    fontFamily: "inherit"
                },
                formActionButtons: {
                    textAlign: "right",
                    "& button": {
                        margin: "1em .5em 0",
                        padding: "1em"
                    }
                }
            }
        }
        ));
        function Ie() {
            var e = {
                title: "",
                description: "",
                category: ""
            }
              , t = Be()
              , n = Object(p.c)((function(e) {
                return e.notes.showNotesForm
            }
            ))
              , o = Object(p.c)((function(e) {
                return e.notes.noteToEdit
            }
            ))
              , a = Object(i.useState)(e)
              , r = Object(X.a)(a, 2)
              , c = r[0]
              , s = r[1]
              , l = Object.keys(V)
              , u = Object(p.b)();
            Object(i.useEffect)((function() {
                return o && s(o)
            }
            ), [o]);
            var m = function() {
                s(e),
                u(C())
            }
              , b = function(e, t) {
                return s(Object(j.a)(Object(j.a)({}, c), {}, Object(E.a)({}, e, t)))
            };
            return Object(q.jsx)("div", {
                children: Object(q.jsxs)(ce.a, {
                    open: n,
                    onClose: m,
                    "aria-labelledby": "notes-dialog-title",
                    "aria-describedby": "notes-dialog-form",
                    className: t.root,
                    children: [Object(q.jsx)(ue.a, {
                        id: "notes-dialog-title",
                        disableTypography: !0,
                        children: o ? "Update note" : "Add note"
                    }), Object(q.jsxs)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(),
                            m(),
                            u(S(c))
                        },
                        children: [Object(q.jsx)(le.a, {
                            children: Object(q.jsxs)(Q.a, {
                                container: !0,
                                spacing: 3,
                                children: [Object(q.jsxs)(Q.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 8,
                                    children: [Object(q.jsx)(d.a, {
                                        placeholder: "Add title\u2026",
                                        className: t.input,
                                        value: c.title,
                                        onChange: function(e) {
                                            return b("title", e.target.value)
                                        },
                                        required: !0
                                    }), Object(q.jsx)(Fe.a, {
                                        rows: 8,
                                        placeholder: "Add description\u2026",
                                        value: c.description,
                                        onChange: function(e) {
                                            return b("description", e.target.value)
                                        },
                                        className: "".concat(t.input, " ").concat(t.textarea),
                                        required: !0
                                    })]
                                }), Object(q.jsx)(Q.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 4,
                                    children: Object(q.jsxs)(De.a, {
                                        value: c.category,
                                        onChange: function(e) {
                                            return b("category", e.target.value)
                                        },
                                        displayEmpty: !0,
                                        className: t.input,
                                        required: !0,
                                        children: [Object(q.jsx)(Ae.a, {
                                            value: "",
                                            disabled: !0,
                                            children: "Select category"
                                        }), l.map((function(e, t) {
                                            return Object(q.jsx)(Ae.a, {
                                                value: e,
                                                children: e
                                            }, t)
                                        }
                                        ))]
                                    })
                                })]
                            })
                        }), Object(q.jsx)(se.a, {
                            children: Object(q.jsx)(Q.a, {
                                container: !0,
                                spacing: 3,
                                className: t.formActionButtons,
                                children: Object(q.jsxs)(Q.a, {
                                    item: !0,
                                    xs: 12,
                                    children: [Object(q.jsx)(z.a, {
                                        onClick: m,
                                        color: "primary",
                                        children: "Cancel"
                                    }), Object(q.jsx)(z.a, {
                                        type: "submit",
                                        color: "primary",
                                        autoFocus: !0,
                                        children: o ? "Update" : "Add"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })
        }
        var qe = Object(u.a)({
            root: {
                maxWidth: "854px",
                width: "100%",
                margin: "1em auto 4em",
                padding: "15px"
            }
        });
        var We = function() {
            var e = qe();
            return Object(q.jsxs)("div", {
                className: e.root,
                children: [Object(q.jsxs)(Q.a, {
                    container: !0,
                    spacing: 3,
                    direction: "column",
                    className: "notes",
                    children: [Object(q.jsx)(Q.a, {
                        item: !0,
                        xs: 12,
                        children: Object(q.jsx)(W, {})
                    }), Object(q.jsxs)(Q.a, {
                        item: !0,
                        container: !0,
                        children: [Object(q.jsx)(Q.a, {
                            item: !0,
                            sm: 9,
                            xs: 12,
                            container: !0,
                            children: Object(q.jsx)(P, {})
                        }), Object(q.jsx)(Q.a, {
                            item: !0,
                            sm: 3,
                            xs: 12,
                            children: Object(q.jsx)(Y, {})
                        })]
                    }), Object(q.jsx)(Q.a, {
                        item: !0,
                        xs: 12,
                        children: Object(q.jsx)(G, {})
                    }), Object(q.jsx)(Q.a, {
                        item: !0,
                        xs: 12,
                        children: Object(q.jsx)(Te, {})
                    })]
                }), Object(q.jsx)(Ie, {})]
            })
        }
          , ze = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 172)).then((function(t) {
                var n = t.getCLS
                  , i = t.getFID
                  , o = t.getFCP
                  , a = t.getLCP
                  , r = t.getTTFB;
                n(e),
                i(e),
                o(e),
                a(e),
                r(e)
            }
            ))
        }
          , Ee = n(164)
          , Me = n(165)
          , Le = function(e) {
            return function(t) {
                return function(n) {
                    t(n);
                    var i = ["notes/createUpdateNote", "notes/toggleNoteStatus", "notes/deleteNote"]
                      , o = ["notes/getNotes", "notes/setSearchValue", "notes/setActiveCategory", "notes/mockNotes"].concat(i);
                    i.includes(n.type) && e.dispatch(D()),
                    o.includes(n.type) && e.dispatch(F())
                }
            }
        }
          , Ze = Object(g.a)({
            reducer: {
                notes: I
            },
            middleware: function(e) {
                return e().concat(Le)
            }
        });
        r.a.render(Object(q.jsxs)(o.a.StrictMode, {
            children: [Object(q.jsx)(Ee.a, {}), Object(q.jsx)(Me.a, {
                theme: Z,
                children: Object(q.jsx)(p.a, {
                    store: Ze,
                    children: Object(q.jsx)(We, {})
                })
            })]
        }), document.getElementById("root")),
        ze()
    }
}, [[109, 1, 2]]]);
//# sourceMappingURL=main.47ebe618.chunk.js.map
