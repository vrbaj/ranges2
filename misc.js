
var ALL_CARDS_STRING = "AA,AKs,AQs,AJs,ATs,A9s,A8s,A7s,A6s,A5s,A4s,A3s,A2s,AKo,KK,KQs,KJs,KTs,K9s,K8s,K7s,K6s,K5s,K4s,K3s,K2s,AQo,KQo,QQ,QJs,QTs,Q9s,Q8s,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s,AJo,KJo,QJo,JJ,JTs,J9s,J8s,J7s,J6s,J5s,J4s,J3s,J2s,ATo,KTo,QTo,JTo,TT,T9s,T8s,T7s,T6s,T5s,T4s,T3s,T2s,A9o,K9o,Q9o,J9o,T9o,99,98s,97s,96s,95s,94s,93s,92s,A8o,K8o,Q8o,J8o,T8o,98o,88,87s,86s,85s,84s,83s,82s,A7o,K7o,Q7o,J7o,T7o,97o,87o,77,76s,75s,74s,73s,72s,A6o,K6o,Q6o,J6o,T6o,96o,86o,76o,66,65s,64s,63s,62s,A5o,K5o,Q5o,J5o,T5o,95o,85o,75o,65o,55,54s,53s,52s,A4o,K4o,Q4o,J4o,T4o,94o,84o,74o,64o,54o,44,43s,42s,A3o,K3o,Q3o,J3o,T3o,93o,83o,73o,63o,53o,43o,33,32s,A2o,K2o,Q2o,J2o,T2o,92o,82o,72o,62o,52o,42o,32o,22";
var ALL_CARDS = ALL_CARDS_STRING.split(",");

var SHEETS = [
    {
        "cards": ["",
        "ATo,A9o,A8o,KTo,K9o,QJo,QTo,Q9o,JTo,T9o,A7s,A6s,K8s,K7s,K6s,K5s,Q9s,J9s,T8s,97s,86s,76s,65s,77,66,55,44,33,22",
        "KJo,QTs,KTs,K9s,A9s,A8s,A5s,A4s,A3s,A2s,87s",
        "AA,KK,AKs,AKo,QQ",
        "AQo,AJo,KQo,AQs,AJs,ATs,KQs,KJs,QJs,JTs,T9s,98s,JJ,TT,99,88"

        ],
        "name": "Open CO",
        "tag": "open_co"
    },
    {
        "cards": ["",
        "AJo,KQo,AJs,ATs,A9s,A8s,KJs,KTs,QJs,QTs,JTs,T9s,98s,88,77,66",
            "AQo",
            "AA,KK",
            "AKo,AKs,AQs,KQs,QQ,JJ,TT,99"
        ],
        "name": "Open EP",
        "tag": "open_ep"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,K7s,K8s,K9s,Q8s,Q9s,J8s,J9s,T8s,97s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,65s,54s,KTo,KJo,QTo,QJo,QKo,QAo,JTo",
            "",
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,KTs,KJs,KQs,KAs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense BB vs CO",
        "tag": "defense_bb_vs_co"
    },
    {
        "cards": ["",
                                             "A9o,97s,K7s,K6s,K5s,K4s,K3s,K2s,Q8s,Q7s,J8s,J7s,T7s,96s,75s,65s,54s,55,44,33,22,QJo,A8o,A7o,A6o,A5o,A4o,A3o,A2o,K9o,K8o,QJo,QTo,Q9o,Q8o,JTo,J9o,J8o,T9o,T8o,98o,Q6s,Q5s,Q4s,Q3s,Q2s",
                                             "KTo,K9s,K8s,A7s,A6s,A5s,A4s,A3s,A2s,Q9s,J9s,86s,T8s,87s",
                                             "AA,KK,QQ,AKs,AKo,QQ,JJ",
                                             "AQo,AJo,ATo,KQo,KJo,AQs,AJs,ATs,A9s,A8s,KQs,KJs,KTs,QJs,QTs,JTs,T9s,98s,87s,76s,JJ,TT,99,88,77,66"
        ],
        "name": "Open SB",
        "tag": "open_sb"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,99,T9s,TT,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQo,KTs,KJs,AJo,QJs,JTs,98s",
            "87s",
            "JJ,QQ,KK,AA,AQs,AKs,KQs,AKo"
        ],
        "name": "Defense MP",
        "tag": "defense_mp"
    },
    {
        "cards": [
            "",
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense BU vs SB",
        "tag": "defense_bu_vs_sb"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,K7s,K8s,K9s,Q8s,Q9s,J8s,J9s,T8s,97s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,65s,54s,KTo,KJo,QTo,QJo,QKo,QAo,JTo",
            "",
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense BB vs SB",
        "tag": "defense_bb_vs_sb"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,99,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,KTs,KJs,ATo,AJo,QJs,JTs,98s,AQo,KQo",
            "87s,76s",
            "TT,JJ,QQ,KK,AA,AJs,AQs,AKs,KQs,AKo"
        ],
        "name": "Defense CO vs MP",
        "tag": "defense_co_vs_mp"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,K7s,K8s,K9s,Q8s,Q9s,J8s,J9s,T8s,97s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,65s,54s,KTo,KJo,QTo,QJo,QKo,QAo,JTo",
            "",
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense BB vs BU",
        "tag": "defense_bb_vs_bu"
    },
    {
        "cards": [
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,KTs,KJs,KQs,KAs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo,QTs",
            "",
            ""
        ],
        "name": "Defense BU vs CO",
        "tag": "defense_bu_vs_co"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,K7s,K8s,K9s,Q8s,Q9s,J8s,J9s,T8s,97s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,65s,54s,KTo,KJo,QTo,QJo,QKo,QAo,JTo",
            "",
            "JJ,QQ,KK,AA,AQs,AKs,KQs,AKo"
        ],
        "name": "Defense BB vs EP",
        "tag": "defense_bb_vs_ep"
    },
    {
        "cards": ["",
                           "87o,64s,K5s,K4s,K3s,K2s,Q8s,Q7s,J8s,J7s,T7s,96s,75s,65s,54s,55,44,33,22,QJo,A8o,A7o,A6o,A5o,A4o,A3o,A2o,K9o,K8o,QJo,QTo,Q9o,Q8o,JTo,J9o,J8o,T9o,T8o,98o,Q6s,Q5s,Q4s,Q3s,Q2s,85s,43s,J6s",
                           "A9o,KTo,K9s,K8s,K7s,K6s,97s,86s",
                           "AA,KK,QQ,AKs,AKo",
                           "AKo,AQo,AJo,ATo,KQo,KJo,AQs,AJs,ATs,A9s,A8s,A7s,A6s,A5s,A4s,A3s,A2s,KQs,KJs,KTs,QJs,QTs,Q9s,JTs,J9s,T9s,T8s,98s,87s,76s,JJ,TT,99,88,77,66"],
        "name": "Open BU",
        "tag": "open_bu"
    },
    {
        "cards": [
            "",
            "",
            "88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense SB",
        "tag": "defense_sb"
    },
    {
        "cards": ["",
         "AJo,ATo,KQo,KJo,A9s,A8s,A7s,A6s,KTs,QTs,JTs,T9s,T9s,98s,87s,88,77,66,55,44,33,22",
         "KJs,ATs,A5s,A4s,A3s,A2s",
         "AA,KK,AKs",
         "AKo,AQo,AKs,AQs,AJs,QJs,,KQs,QQ,JJ,TT,99"
        ],
        "name": "Open MP",
        "tag": "open_mp"
    },
    {
            "cards": ["",
            "",
            "",
                "AA, AKs, AKo, KK, QQ",
                "AQs, AJs, ATs, KQs, KJs, QJs, JTs, T9s, AQo, JJ,TT,99,88,77,66,55,44,33,22",
                "AJo, KQo, A9s, A5s, QTs, 98s,87s"
            ],
            "name": "BU vs MP",
            "tag": "defense_bu_vs_mp"
        }
]




function get_random_items(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
};


function get_sheet(tag) {
    for (i = 0; i < SHEETS.length; i++) {
        if (SHEETS[i].tag === tag) {
            return SHEETS[i];
        };    
    }; 
};


class HandMatrix {

    constructor(board_id) {
        this.board_id = board_id;
        this.cards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]; 
        this.selected_cards = []; 
    }

    draw_board(selected_cards) {
        this.selected_cards = selected_cards; 
        var self = this;
        var matrix_content = "";
        var row_content = "";
        var card_block = "";
        var card_actual = "";
        var card_classes = "";
        var i, j, k;
        for (i = 0; i < this.cards.length; i++) {
            row_content = ""
            for (j = 0; j < this.cards.length; j++) {
                // make the card label+id
                if (i > j) {
                    card_actual = this.cards[j] + this.cards[i] + "o";
                    card_classes = "offsuit_card";
                } else if (j > i) {
                    card_actual = this.cards[i] + this.cards[j] + "s";
                    card_classes = "suited_card";
                } else {
                    card_actual = this.cards[i] + this.cards[j];
                    card_classes = "same_card";
                };
                // check if is selected
                console.log(this.selected_cards[0]);
                for (k = 0; k < this.selected_cards.length; k++) {               
                    if (this.selected_cards[k].includes(card_actual)) {
                        card_classes += " " + "selected_card" + (k+1);
                    };
                };
                card_classes += " cardid_" + card_actual;
                card_block = '<td class="' + card_classes + '">' + card_actual + '</td>';
                row_content += card_block;
            };
            matrix_content += "<tr>" + row_content + "</tr>";
        };
        $("#"+ this.board_id).html(matrix_content);

        // // selection part
        // $("#" + this.board_id + " td").click(function() {
        //     var card_classes = $(this).attr('class').split(" ");
        //     var card_selected = "";
        //     for (i = 0; i < card_classes.length; i++) {
        //         if (card_classes[i].includes("cardid_")) {
        //             card_selected = card_classes[i].split("_")[1];
        //         };   
        //     };
        //     // highlight and store
        //     if (self.selected_cards.includes(card_selected)) {
        //         var index = self.selected_cards.indexOf(card_selected);
        //         if (index > -1) {
        //             self.selected_cards.splice(index, 1);
        //         };
        //         $(this).removeClass('selected_card');
        //     } else {
        //         self.selected_cards.push(card_selected);    
        //         $(this).addClass('selected_card');
        //     };

        // });

    }

}