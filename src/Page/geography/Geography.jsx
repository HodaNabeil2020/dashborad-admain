

import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo'

import { geo } from "./world_countries.jsx"

const data = [
    {
        "id": "AFG",
        "value": 73054
    },
    {
        "id": "AGO",
        "value": 283196
    },
    {
        "id": "ALB",
        "value": 905020
    },
    {
        "id": "ARE",
        "value": 92369
    },
    {
        "id": "ARG",
        "value": 844653
    },
    {
        "id": "ARM",
        "value": 285838
    },
    {
        "id": "ATA",
        "value": 689193
    },
    {
        "id": "ATF",
        "value": 654071
    },
    {
        "id": "AUT",
        "value": 472802
    },
    {
        "id": "AZE",
        "value": 14560
    },
    {
        "id": "BDI",
        "value": 154925
    },
    {
        "id": "BEL",
        "value": 503950
    },
    {
        "id": "BEN",
        "value": 378853
    },
    {
        "id": "BFA",
        "value": 1905
    },
    {
        "id": "BGD",
        "value": 448623
    },
    {
        "id": "BGR",
        "value": 246606
    },
    {
        "id": "BHS",
        "value": 84838
    },
    {
        "id": "BIH",
        "value": 179653
    },
    {
        "id": "BLR",
        "value": 96675
    },
    {
        "id": "BLZ",
        "value": 981353
    },
    {
        "id": "BOL",
        "value": 500675
    },
    {
        "id": "BRN",
        "value": 789672
    },
    {
        "id": "BTN",
        "value": 754574
    },
    {
        "id": "BWA",
        "value": 867291
    },
    {
        "id": "CAF",
        "value": 92826
    },
    {
        "id": "CAN",
        "value": 55331
    },
    {
        "id": "CHE",
        "value": 993706
    },
    {
        "id": "CHL",
        "value": 172044
    },
    {
        "id": "CHN",
        "value": 946687
    },
    {
        "id": "CIV",
        "value": 382233
    },
    {
        "id": "CMR",
        "value": 627080
    },
    {
        "id": "COG",
        "value": 726937
    },
    {
        "id": "COL",
        "value": 581814
    },
    {
        "id": "CRI",
        "value": 469369
    },
    {
        "id": "CUB",
        "value": 259626
    },
    {
        "id": "-99",
        "value": 631527
    },
    {
        "id": "CYP",
        "value": 344896
    },
    {
        "id": "CZE",
        "value": 611222
    },
    {
        "id": "DEU",
        "value": 707568
    },
    {
        "id": "DJI",
        "value": 113293
    },
    {
        "id": "DNK",
        "value": 68819
    },
    {
        "id": "DOM",
        "value": 371461
    },
    {
        "id": "DZA",
        "value": 498224
    },
    {
        "id": "ECU",
        "value": 260719
    },
    {
        "id": "EGY",
        "value": 374807
    },
    {
        "id": "ERI",
        "value": 380191
    },
    {
        "id": "ESP",
        "value": 695276
    },
    {
        "id": "EST",
        "value": 111606
    },
    {
        "id": "ETH",
        "value": 605783
    },
    {
        "id": "FIN",
        "value": 511490
    },
    {
        "id": "FJI",
        "value": 320959
    },
    {
        "id": "FLK",
        "value": 267850
    },
    {
        "id": "FRA",
        "value": 841516
    },
    {
        "id": "GAB",
        "value": 601222
    },
    {
        "id": "GBR",
        "value": 792353
    },
    {
        "id": "GEO",
        "value": 225050
    },
    {
        "id": "GHA",
        "value": 537850
    },
    {
        "id": "GIN",
        "value": 617314
    },
    {
        "id": "GMB",
        "value": 578699
    },
    {
        "id": "GNB",
        "value": 949223
    },
    {
        "id": "GNQ",
        "value": 969119
    },
    {
        "id": "GRC",
        "value": 730571
    },
    {
        "id": "GTM",
        "value": 428651
    },
    {
        "id": "GUY",
        "value": 370429
    },
    {
        "id": "HND",
        "value": 446728
    },
    {
        "id": "HRV",
        "value": 427854
    },
    {
        "id": "HTI",
        "value": 802964
    },
    {
        "id": "HUN",
        "value": 548657
    },
    {
        "id": "IDN",
        "value": 59204
    },
    {
        "id": "IND",
        "value": 6730
    },
    {
        "id": "IRL",
        "value": 317182
    },
    {
        "id": "IRN",
        "value": 412591
    },
    {
        "id": "IRQ",
        "value": 443573
    },
    {
        "id": "ISL",
        "value": 92588
    },
    {
        "id": "ISR",
        "value": 488124
    },
    {
        "id": "ITA",
        "value": 438945
    },
    {
        "id": "JAM",
        "value": 134130
    },
    {
        "id": "JOR",
        "value": 242839
    },
    {
        "id": "JPN",
        "value": 499038
    },
    {
        "id": "KAZ",
        "value": 5980
    },
    {
        "id": "KEN",
        "value": 925790
    },
    {
        "id": "KGZ",
        "value": 345891
    },
    {
        "id": "KHM",
        "value": 406415
    },
    {
        "id": "OSA",
        "value": 926154
    },
    {
        "id": "KWT",
        "value": 802416
    },
    {
        "id": "LAO",
        "value": 712059
    },
    {
        "id": "LBN",
        "value": 460913
    },
    {
        "id": "LBR",
        "value": 123894
    },
    {
        "id": "LBY",
        "value": 800136
    },
    {
        "id": "LKA",
        "value": 728884
    },
    {
        "id": "LSO",
        "value": 202794
    },
    {
        "id": "LTU",
        "value": 637774
    },
    {
        "id": "LUX",
        "value": 605547
    },
    {
        "id": "LVA",
        "value": 377545
    },
    {
        "id": "MAR",
        "value": 290308
    },
    {
        "id": "MDA",
        "value": 239827
    },
    {
        "id": "MDG",
        "value": 291095
    },
    {
        "id": "MEX",
        "value": 36263
    },
    {
        "id": "MKD",
        "value": 362125
    },
    {
        "id": "MLI",
        "value": 689204
    },
    {
        "id": "MMR",
        "value": 75320
    },
    {
        "id": "MNE",
        "value": 371873
    },
    {
        "id": "MNG",
        "value": 19569
    },
    {
        "id": "MOZ",
        "value": 992327
    },
    {
        "id": "MRT",
        "value": 560327
    },
    {
        "id": "MWI",
        "value": 478107
    },
    {
        "id": "MYS",
        "value": 461039
    },
    {
        "id": "NAM",
        "value": 164566
    },
    {
        "id": "NCL",
        "value": 761625
    },
    {
        "id": "NER",
        "value": 595804
    },
    {
        "id": "NGA",
        "value": 832530
    },
    {
        "id": "NIC",
        "value": 327758
    },
    {
        "id": "NLD",
        "value": 351266
    },
    {
        "id": "NOR",
        "value": 490120
    },
    {
        "id": "NPL",
        "value": 189814
    },
    {
        "id": "NZL",
        "value": 123692
    },
    {
        "id": "OMN",
        "value": 648737
    },
    {
        "id": "PAK",
        "value": 954849
    },
    {
        "id": "PAN",
        "value": 222349
    },
    {
        "id": "PER",
        "value": 886991
    },
    {
        "id": "PHL",
        "value": 271941
    },
    {
        "id": "PNG",
        "value": 62370
    },
    {
        "id": "POL",
        "value": 391688
    },
    {
        "id": "PRI",
        "value": 306879
    },
    {
        "id": "PRT",
        "value": 799041
    },
    {
        "id": "PRY",
        "value": 159438
    },
    {
        "id": "QAT",
        "value": 110432
    },
    {
        "id": "ROU",
        "value": 511117
    },
    {
        "id": "RUS",
        "value": 808273
    },
    {
        "id": "RWA",
        "value": 259002
    },
    {
        "id": "ESH",
        "value": 136625
    },
    {
        "id": "SAU",
        "value": 680009
    },
    {
        "id": "SDN",
        "value": 789880
    },
    {
        "id": "SDS",
        "value": 868364
    },
    {
        "id": "SEN",
        "value": 276526
    },
    {
        "id": "SLB",
        "value": 660455
    },
    {
        "id": "SLE",
        "value": 418017
    },
    {
        "id": "SLV",
        "value": 115962
    },
    {
        "id": "ABV",
        "value": 983870
    },
    {
        "id": "SOM",
        "value": 876389
    },
    {
        "id": "SRB",
        "value": 859617
    },
    {
        "id": "SUR",
        "value": 25609
    },
    {
        "id": "SVK",
        "value": 589903
    },
    {
        "id": "SVN",
        "value": 234936
    },
    {
        "id": "SWZ",
        "value": 840237
    },
    {
        "id": "SYR",
        "value": 699667
    },
    {
        "id": "TCD",
        "value": 403199
    },
    {
        "id": "TGO",
        "value": 795854
    },
    {
        "id": "THA",
        "value": 477520
    },
    {
        "id": "TJK",
        "value": 844435
    },
    {
        "id": "TKM",
        "value": 837435
    },
    {
        "id": "TLS",
        "value": 278255
    },
    {
        "id": "TTO",
        "value": 466088
    },
    {
        "id": "TUN",
        "value": 157915
    },
    {
        "id": "TUR",
        "value": 276865
    },
    {
        "id": "TWN",
        "value": 577185
    },
    {
        "id": "TZA",
        "value": 491840
    },
    {
        "id": "UGA",
        "value": 322973
    },
    {
        "id": "UKR",
        "value": 230930
    },
    {
        "id": "URY",
        "value": 823207
    },
    {
        "id": "USA",
        "value": 597077
    },
    {
        "id": "UZB",
        "value": 198702
    },
    {
        "id": "VEN",
        "value": 492936
    },
    {
        "id": "VNM",
        "value": 55815
    },
    {
        "id": "VUT",
        "value": 542060
    },
    {
        "id": "PSE",
        "value": 333265
    },
    {
        "id": "YEM",
        "value": 717660
    },
    {
        "id": "ZAF",
        "value": 436672
    },
    {
        "id": "ZMB",
        "value": 375147
    },
    {
        "id": "ZWE",
        "value": 944956
    },
    {
        "id": "KOR",
        "value": 976180
    }
]
const Geography = () => {
    const theme = useTheme()
    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsiveChoropleth
                data={data}
                features={geo.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
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
                                "strokeWidth": 1
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

                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.text.primary,
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.text.primary,
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

export default Geography;
