
var ALL_CARDS_STRING = "AA,AKs,AQs,AJs,ATs,A9s,A8s,A7s,A6s,A5s,A4s,A3s,A2s,AKo,KK,KQs,KJs,KTs,K9s,K8s,K7s,K6s,K5s,K4s,K3s,K2s,AQo,KQo,QQ,QJs,QTs,Q9s,Q8s,Q7s,Q6s,Q5s,Q4s,Q3s,Q2s,AJo,KJo,QJo,JJ,JTs,J9s,J8s,J7s,J6s,J5s,J4s,J3s,J2s,ATo,KTo,QTo,JTo,TT,T9s,T8s,T7s,T6s,T5s,T4s,T3s,T2s,A9o,K9o,Q9o,J9o,T9o,99,98s,97s,96s,95s,94s,93s,92s,A8o,K8o,Q8o,J8o,T8o,98o,88,87s,86s,85s,84s,83s,82s,A7o,K7o,Q7o,J7o,T7o,97o,87o,77,76s,75s,74s,73s,72s,A6o,K6o,Q6o,J6o,T6o,96o,86o,76o,66,65s,64s,63s,62s,A5o,K5o,Q5o,J5o,T5o,95o,85o,75o,65o,55,54s,53s,52s,A4o,K4o,Q4o,J4o,T4o,94o,84o,74o,64o,54o,44,43s,42s,A3o,K3o,Q3o,J3o,T3o,93o,83o,73o,63o,53o,43o,33,32s,A2o,K2o,Q2o,J2o,T2o,92o,82o,72o,62o,52o,42o,32o,22";
var ALL_CARDS = ALL_CARDS_STRING.split(",");

var SHEETS = [
    {
        "cards": [
            "22,33,44,55,66,77,88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K8s,K9s,KTs,KJs,KQs,KAs,Q9s,QTs,QJs,QKs,QAs,J9s,JTs,JQs,JKs,JAs,T8s,T9s,TJs,TQs,TKs,TAs,97s,98s,9Ts,9Js,9Qs,9Ks,9As,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,76s,65s,54s,A9o,ATo,AJo,AQo,AKo,KTo,KJo,KQo,KAo,QTo,QJo,QKo,QAo,JTo",
            ""
        ],
        "name": "Open CO",
        "tag": "open_co"
    },
    {
        "cards": [
            "66,77,88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,98s,AJo,AQo,AKo,KQo",
            ""
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
        "cards": [
            "22,33,44,55,66,77,88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K2s,K3s,K4s,K5s,K6s,K7s,K8s,K9s,KTs,KJs,KQs,KAs,Q2s,Q3s,Q4s,Q5s,Q6s,Q7s,Q8s,Q9s,QTs,QJs,QKs,QAs,J7s,J8s,J9s,JTs,JQs,JKs,JAs,T7s,T8s,T9s,TJs,TQs,TKs,TAs,96s,97s,98s,9Ts,9Js,9Qs,9Ks,9As,85s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,64s,65s,67s,68s,69s,6Ts,6Js,6Qs,6Ks,6As,54s,43s,32s,A2o,A3o,A4o,A5o,A6o,A7o,A8o,A9o,ATo,AJo,AQo,AKo,K9o,KTo,KJo,KQo,KAo,Q9o,QTo,QJo,QKo,QAo,J9o,JTo,JQo,JKo,JAo,T8o,T9o,TJo,TQo,TKo,TAo,98o,87o,76o",
            ""
        ],
        "name": "Open SB",
        "tag": "open_sb"
    },
    {
        "cards": [
            "22,33,44,55,66,77,88,99,TT,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,KTs,KJs,AJo,QJs,JTs,98s",
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
            "22,33,44,55,66,77,88,99,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,KTs,KJs,ATo,AJo,QJs,JTs,98s",
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
            "",
            "99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,KTs,KJs,KQs,KAs,QJs,QKs,QAs,JTs,T9s,98s,ATo,AJo,AQo,AKo,KQo"
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
        "cards": [
            "22,33,44,55,66,77,88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K2s,K3s,K4s,K5s,K6s,K7s,K8s,K9s,KTs,KJs,KQs,KAs,Q2s,Q3s,Q4s,Q5s,Q6s,Q7s,Q8s,Q9s,QTs,QJs,QKs,QAs,J7s,J8s,J9s,JTs,JQs,JKs,JAs,T7s,T8s,T9s,TJs,TQs,TKs,TAs,96s,97s,98s,9Ts,9Js,9Qs,9Ks,9As,85s,86s,87s,89s,8Ts,8Js,8Qs,8Ks,8As,75s,76s,78s,79s,7Ts,7Js,7Qs,7Ks,7As,64s,65s,67s,68s,69s,6Ts,6Js,6Qs,6Ks,6As,54s,43s,32s,A2o,A3o,A4o,A5o,A6o,A7o,A8o,A9o,ATo,AJo,AQo,AKo,K9o,KTo,KJo,KQo,KAo,Q9o,QTo,QJo,QKo,QAo,J9o,JTo,JQo,JKo,JAo,T8o,T9o,TJo,TQo,TKo,TAo,98o,87o,76o",
            ""
        ],
        "name": "Open BU",
        "tag": "open_bu"
    },
    {
        "cards": [
            "",
            "88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,QTs,QJs,QKs,QAs,JTs,T9s,AJo,AQo,AKo,KQo"
        ],
        "name": "Defense SB",
        "tag": "defense_sb"
    },
    {
        "cards": [
            "66,77,88,99,TT,JJ,QQ,KK,AA,A2s,A3s,A4s,A5s,A6s,A7s,A8s,A9s,ATs,AJs,AQs,AKs,K9s,KTs,KJs,KQs,KAs,Q9s,QTs,QJs,QKs,QAs,J9s,JTs,JQs,JKs,JAs,T9s,98s,87s,76s,ATo,AJo,AQo,AKo,KQo",
            ""
        ],
        "name": "Open MP",
        "tag": "open_mp"
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