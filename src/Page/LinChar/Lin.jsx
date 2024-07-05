



import { Box } from "@mui/material";



import { useTheme } from '@mui/material';
import { ResponsiveLine } from "@nivo/line";

const data = [
    {
        "id": "japan",
        "color": "hsl(136, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 258
            },
            {
                "x": "helicopter",
                "y": 133
            },
            {
                "x": "boat",
                "y": 77
            },
            {
                "x": "train",
                "y": 71
            },
            {
                "x": "subway",
                "y": 264
            },
            {
                "x": "bus",
                "y": 143
            },
            {
                "x": "car",
                "y": 274
            },
            {
                "x": "moto",
                "y": 257
            },
            {
                "x": "bicycle",
                "y": 69
            },
            {
                "x": "horse",
                "y": 110
            },
            {
                "x": "skateboard",
                "y": 267
            },
            {
                "x": "others",
                "y": 8
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(249, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 201
            },
            {
                "x": "helicopter",
                "y": 29
            },
            {
                "x": "boat",
                "y": 157
            },
            {
                "x": "train",
                "y": 27
            },
            {
                "x": "subway",
                "y": 198
            },
            {
                "x": "bus",
                "y": 250
            },
            {
                "x": "car",
                "y": 192
            },
            {
                "x": "moto",
                "y": 44
            },
            {
                "x": "bicycle",
                "y": 233
            },
            {
                "x": "horse",
                "y": 108
            },
            {
                "x": "skateboard",
                "y": 9
            },
            {
                "x": "others",
                "y": 212
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(231, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 230
            },
            {
                "x": "helicopter",
                "y": 133
            },
            {
                "x": "boat",
                "y": 271
            },
            {
                "x": "train",
                "y": 42
            },
            {
                "x": "subway",
                "y": 216
            },
            {
                "x": "bus",
                "y": 104
            },
            {
                "x": "car",
                "y": 292
            },
            {
                "x": "moto",
                "y": 150
            },
            {
                "x": "bicycle",
                "y": 261
            },
            {
                "x": "horse",
                "y": 69
            },
            {
                "x": "skateboard",
                "y": 232
            },
            {
                "x": "others",
                "y": 160
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(96, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 2
            },
            {
                "x": "helicopter",
                "y": 28
            },
            {
                "x": "boat",
                "y": 237
            },
            {
                "x": "train",
                "y": 56
            },
            {
                "x": "subway",
                "y": 248
            },
            {
                "x": "bus",
                "y": 231
            },
            {
                "x": "car",
                "y": 80
            },
            {
                "x": "moto",
                "y": 155
            },
            {
                "x": "bicycle",
                "y": 160
            },
            {
                "x": "horse",
                "y": 105
            },
            {
                "x": "skateboard",
                "y": 163
            },
            {
                "x": "others",
                "y": 152
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(108, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 282
            },
            {
                "x": "helicopter",
                "y": 67
            },
            {
                "x": "boat",
                "y": 26
            },
            {
                "x": "train",
                "y": 52
            },
            {
                "x": "subway",
                "y": 256
            },
            {
                "x": "bus",
                "y": 103
            },
            {
                "x": "car",
                "y": 109
            },
            {
                "x": "moto",
                "y": 99
            },
            {
                "x": "bicycle",
                "y": 268
            },
            {
                "x": "horse",
                "y": 127
            },
            {
                "x": "skateboard",
                "y": 249
            },
            {
                "x": "others",
                "y": 179
            }
        ]
    }
]



const Lin = ({ isDashboard = false }) => {
    const theme = useTheme()
    return (
        <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Transportation',
                    legendOffset: 40,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Count',
                    legendOffset: -50,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                theme={

                    {

                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        },
                        "axis": {
                            "domain": {
                                "line": {
                                    "stroke": theme.palette.divider,
                                    "strokeWidth": 1
                                }
                            },
                            "legend": {
                                "text": {
                                    "fontSize": 12,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "ticks": {
                                "line": {
                                    "stroke": theme.palette.divider,
                                    "strokeWidth": 1
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "grid": {
                            "line": {
                                "stroke": theme.palette.divider,
                                "strokeWidth": 0
                            }
                        },
                        "legends": {
                            "title": {
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            },
                            "ticks": {
                                "line": {},
                                "text": {
                                    "fontSize": 10,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "annotations": {
                            "text": {
                                "fontSize": 13,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "link": {
                                "stroke": "#000000",
                                "strokeWidth": 1,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "outline": {
                                "stroke": "#000000",
                                "strokeWidth": 2,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "symbol": {
                                "fill": "#000000",
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            }
                        },
                        "tooltip": {
                            "wrapper": {},
                            "container": {
                                "background": theme.palette.background.paper,
                                "color": theme.palette.text.primary,
                                "fontSize": 12
                            },
                            "basic": {},
                            "chip": {},
                            "table": {},
                            "tableCell": {},
                            "tableCellValue": {}
                        }
                    }
                }
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    );
}

export default Lin;
