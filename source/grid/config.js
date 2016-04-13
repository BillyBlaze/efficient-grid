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

		"columns": {
			"flex-basis": "100% / (@grid-columns / $INDEX)",
			"max-width": "100% / (@grid-columns / $INDEX)"
		},

		"offsets": {
			"margin-left": "100% / (@grid-columns / $INDEX)"
		},

		"extra": {

			"offset-xs-reset": {
				"margin-left": "0%"
			},

			"start-xs": {
				"justify-content": "flex-start",
				"text-align": "start"
			},
			"center-xs": {
				"justify-content": "center",
				"text-align": "center"
			},
			"end-xs": {
				"justify-content": "flex-end",
				"text-align": "end"
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
			},

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
