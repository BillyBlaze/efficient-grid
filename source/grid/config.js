module.exports = {

	"options": {
		"gridFileName": "./source/grid/template.css",
		"dist": "./dist/less/grid",

		"baseClassName": "xs",
		"gridClassNames": ["xs", "sm", "md", "lg", "xlg"],
		"extendNonBaseByClass": true,
		"columns": 12
	},

	"data": {


		"column": {
			"flex-grow": "1",
			"flex-basis": "0",
			"max-width": "100%",

			"padding-right": "@grid-gutter / 2",
			"padding-left": "@grid-gutter / 2",

			"margin-bottom": "@grid-gutter",
			"min-height": "1px"
		},

		"columns": {
			"flex-basis": "100% / (@grid-columns / $INDEX)",
			"max-width": "100% / (@grid-columns / $INDEX)"
		},

		"offsets": {
			"margin-left": "100% / (@grid-columns / $INDEX)"
		},

		"extra": {

			"col-xs-offset-reset": {
				"margin-left": "0%"
			},

			"left-xs": {
				"justify-content": "flex-start",
				"text-align": "start"
			},
			"center-xs": {
				"justify-content": "center",
				"text-align": "center"
			},
			"right-xs": {
				"justify-content": "flex-end",
				"text-align": "end"
			},

			"vertical-xs": {
				"flex-direction": "column"
			},
			"vertical-reverse-xs": {
				"flex-direction": "column-reverse"
			},

			"top-xs": {
				"align-items": "flex-start"
			},
			"middle-xs": {
				"align-items": "center"
			},
			"bottom-xs": {
				"align-items": "flex-end"
			},

			"around-xs": {
				"justify-content": "space-around"
			},
			"between-xs": {
				"justify-content": "space-between"
			},

			"stretch-xs": {
				"align-content": "stretch"
			},

			"first-xs": {
				"-webkit-box-ordinal-group": "0",
				"order": "-1"
			},
			"last-xs": {
				"-webkit-box-ordinal-group": "2",
				"order": "1"
			},

			"nowrap-xs": {
				"flex-wrap": "nowrap"
			},
			"wrap-xs": {
				"flex-wrap": "wrap"
			},
			"wrap-reverse-xs": {
				"flex-wrap": "wrap"
			}
		},

		"visible": {

			"hidden-xs": {
				"display": "none"
			},
			"visible-xs": {
				"display": "block"
			},
			"visible-xs-block": {
				"display": "block"
			},
			"visible-xs-inline": {
				"display": "inline"
			},
			"visible-xs-inline-block": {
				"display": "inline-block"
			},
			"visible-xs-flex": {
				"display": "flex"
			},
			"visible-xs-inline-flex": {
				"display": "inline-flex"
			}

		}
	}
}
