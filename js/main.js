function newBoard() {
    var board = document.getElementById("board");
    board.innerHTML = '';

    var lightSquare;
    var htmlString = '';
    var fileLetter;
    var fileNumber;
    var rankNumber;

    for (var rows = 0; rows < 8; rows++) {
        switch(rows) {

            case 0:
                rankNumber = '8';
                break;
    
            case 1:
                rankNumber = '7';
                break;
            
            case 2:
                rankNumber = '6';
                break;

            case 3:
                rankNumber = '5';
                break;

            case 4:
                rankNumber = '4';
                break;

            case 5:
                rankNumber = '3';
                break;
            
            case 6:
                rankNumber = '2';
                break;
                
            case 7:
                rankNumber = '1';
                break;
            
            default:
                console.log('wat?!?');
                break;
        }

        htmlString +=  '<div class="row">';
        if (rows % 2 == 0) {
            lightSquare = true;
        } else {
            lightSquare = false;
        }
        
        for (var cols = 0; cols < 8; cols++) {
            switch(cols) {
                case 0:
                    fileLetter = 'a';
                    fileNumber = 1;
                    break;

                case 1:
                    fileLetter = 'b';
                    fileNumber = 2;
                    break;
                
                case 2:
                    fileLetter = 'c';
                    fileNumber = 3;
                    break;

                case 3:
                    fileLetter = 'd';
                    fileNumber = 4;
                    break;

                case 4:
                    fileLetter = 'e';
                    fileNumber = 5;
                    break;

                case 5:
                    fileLetter = 'f';
                    fileNumber = 6;
                    break;
                
                case 6:
                    fileLetter = 'g';
                    fileNumber = 7;
                    break;
                    
                case 7:
                    fileLetter = 'h';
                    fileNumber = 8;
                    
                    break;
                
                default:
                    console.log('wat?!?');
                    break;
            }

            //var squareId = fileLetter+rankNumber;
            var squareId = 's' + fileNumber + rankNumber;
            if (lightSquare) {
                htmlString +=  '<div id="' + squareId + '" class="col light-tile file-' + fileLetter + ' rank-' + rankNumber + '" onclick="tileClick(s' + fileNumber + rankNumber + ', ' + fileNumber + ')"></div>';
            } else {
                htmlString +=  '<div id="' + squareId + '" class="col dark-tile file-' + fileLetter + ' rank-' + rankNumber + '" onclick="tileClick(s' + fileNumber + rankNumber + ', ' + fileNumber + ')"></div>';
            }

            lightSquare = !lightSquare;
        }

        htmlString +=  '</div>';
        board.innerHTML = htmlString;
    }
}

function generatePieces() {
    /*
    var blackPawns = document.querySelectorAll('.rank-7');
    var blackKnights = document.querySelectorAll('#b8, #g8');
    var blackBishops = document.querySelectorAll('#c8, #f8');
    var blackRooks = document.querySelectorAll('#a8, #h8');
    var blackKing = document.getElementById('e8');
    var blackQueen = document.getElementById('d8');

    var whitePawns = document.querySelectorAll('.rank-2');
    var whiteKnights = document.querySelectorAll('#b1, #g1');
    var whiteBishops = document.querySelectorAll('#c1, #f1');
    var whiteRooks = document.querySelectorAll('#a1, #h1');
    var whiteKing = document.getElementById('e1');
    var whiteQueen = document.getElementById('d1');
    */

    var blackPawns = document.querySelectorAll('.rank-7');
    var blackKnights = document.querySelectorAll('#s28, #s78');
    var blackBishops = document.querySelectorAll('#s38, #s68');
    var blackRooks = document.querySelectorAll('#s18, #s88, #s44');
    var blackKing = document.getElementById('s58');
    var blackQueen = document.getElementById('s48');

    var whitePawns = document.querySelectorAll('.rank-2, #s74, #s24');
    var whiteKnights = document.querySelectorAll('#s21, #s71');
    var whiteBishops = document.querySelectorAll('#s31, #s61');
    var whiteRooks = document.querySelectorAll('#s11, #s81');
    var whiteKing = document.getElementById('s51');
    var whiteQueen = document.getElementById('s41');
    
    
    blackPawns.forEach(addBlackPawns);
    blackRooks.forEach(addBlackRooks);
    blackBishops.forEach(addBlackBishops);
    blackKnights.forEach(addBlackKnights);
    blackKing.innerHTML = '<div class="black-king black-piece"></div>';
    blackQueen.innerHTML = '<div class="black-queen black-piece"></div>';

    whitePawns.forEach(addWhitePawns);
    whiteRooks.forEach(addWhiteRooks);
    whiteBishops.forEach(addWhiteBishops);
    whiteKnights.forEach(addWhiteKnights);
    whiteKing.innerHTML = '<div class="white-king white-piece"></div>';
    whiteQueen.innerHTML = '<div class="white-queen white-piece"></div>';

    function addBlackPawns(tile) {
        tile.innerHTML = '<div class="black-pawn black-piece"></div>';
    }

    function addWhitePawns(tile) {
        tile.innerHTML = '<div class="white-pawn white-piece"></div>';
    }

    function addBlackRooks(tile) {
        tile.innerHTML = '<div class="black-rook black-piece"></div>';
    }

    function addWhiteRooks(tile) {
        tile.innerHTML = '<div class="white-rook white-piece"></div>';
    }

    function addBlackBishops(tile) {
        tile.innerHTML = '<div class="black-bishop black-piece"></div>';
    }

    function addWhiteBishops(tile) {
        tile.innerHTML = '<div class="white-bishop white-piece"></div>';
    }

    function addBlackKnights(tile) {
        tile.innerHTML = '<div class="black-knight black-piece"></div>';
    }

    function addWhiteKnights(tile) {
        tile.innerHTML = '<div class="white-knight white-piece"></div>';
    }

}

function tileClick(tile, fileNumber) {
    console.log("Tileclick");
    console.log("File Number: " + fileNumber);
    console.log(tile);

    if (tile.innerHTML == "") {
        console.log("empty square");
    } else {

        //
        //
        // ADD ACTIVE PIECE TOGGLE 
        var classList = tile.firstChild.classList.toString();

        console.log("Class List: " + tile.firstChild.classList);
        if (classList.includes('active')) {
             console.log("Piece was active. Deactivating Piece");
             tile.firstChild.classList.remove('active');

             //Remove Highlighted Tiles
             var highlightedTiles = document.querySelectorAll(".highlighted-tile");
             console.log("Highlighted Tiles: " + highlightedTiles);

             for (var i = 0; i < highlightedTiles.length; i++) {
                 console.log("Highlighted Tile: " + highlightedTiles[i]);
                 highlightedTiles[i].classList.remove('highlighted-tile');
             }
        } else {
            console.log("Piece was NOT Active. Activating Piece");
            tile.firstChild.classList.add('active');



            var piece = tile.firstChild.classList[0];
            var fileString = tile.id.substring(1,2);
            var rankString = tile.id.substring(2,3);
            var file = parseInt(fileString);
            var rank = parseInt(rankString);
            var squares;

            console.log("File: " + file);
            console.log("Rank: " + rank);
            console.log("Contains piece: " + piece);
            console.log(tile.id);

            switch (piece) {
                case "white-pawn":
                    var queryString = '#s' + (file-1) + (rank+1) +', #s' + (file) + (rank+1) + ', #s' + (file+1) + (rank+1);
                    if (rank == 2) {
                        queryString += ', #s' + (file) + (rank+2);
                    }
                    break;
                
                case "black-pawn":
                    var queryString = '#s' + (file-1) + (rank-1) +', #s' + (file) + (rank-1) + ', #s' + (file+1) + (rank-1);
                    if (rank == 7) {
                        queryString += ', #s' + (file) + (rank-2);
                    }
                    break;

                case "white-knight":
                case "black-knight":
                    var queryString = '#s' + (file-1) + (rank-2) +', #s' + (file-1) + (rank+2) +', #s' + (file-2) + (rank-1) +
                    ', #s' + (file-2) + (rank+1) +', #s' + (file+1) + (rank+2) +', #s' + (file+1) + (rank-2) +', #s' + 
                    (file+2) + (rank+1) +', #s' + (file+2) + (rank-1);
                    break;
                
                case "white-bishop":
                case "black-bishop":
                    var queryString;

                    for (var count = 1; count < 8; count++) {
                        if(queryString == null) {
                            queryString = '#s' + String(file+count) + String(rank+count) +', #s' + String(file-count) + String(rank-count) +', #s' + String(file-count) + String(rank+count) +', #s' + String(file+count) + String(rank-count);
                        } else {
                            queryString += ', #s' + String(file+count) + String(rank+count) + ', #s' + String(file-count) + String(rank-count) + ', #s' + String(file-count) + String(rank+count) + ', #s' + String(file+count) + String(rank-count);
                        }
                    }
                    break;
                
                case "white-rook":
                case "black-rook":
                    var queryString;

                    for (var count = 1; count < 8; count++) {
                        if(queryString == null) {
                            queryString = '#s' + String(file+count) + String(rank) +', #s' + String(file-count) + String(rank) +', #s' + String(file) + String(rank+count) +', #s' + String(file) + String(rank-count);
                        } else {
                            queryString += ', #s' + String(file+count) + String(rank) +', #s' + String(file-count) + String(rank) +', #s' + String(file) + String(rank+count) +', #s' + String(file) + String(rank-count);
                        }
                    }
                    break;

                case "white-queen":
                case "black-queen":
                    var queryString;

                    for (var count = 1; count < 8; count++) {
                        if(queryString == null) {
                            queryString = '#s' + String(file+count) + String(rank) +', #s' + String(file-count) + String(rank) +', #s' + String(file) + String(rank+count) +', #s' + String(file) + String(rank-count) + ', #s' + String(file+count) + String(rank+count) +', #s' + String(file-count) + String(rank-count) +', #s' + String(file-count) + String(rank+count) +', #s' + String(file+count) + String(rank-count);
                        } else {
                            queryString += ', #s' + String(file+count) + String(rank+count) + ', #s' + String(file-count) + String(rank-count) + ', #s' + String(file-count) + String(rank+count) + ', #s' + String(file+count) + String(rank-count) + ', #s' + String(file+count) + String(rank) +', #s' + String(file-count) + String(rank) +', #s' + String(file) + String(rank+count) +', #s' + String(file) + String(rank-count);
                        }
                    }
                    break;

                case "white-king":
                case "black-king":
                    var queryString = '#s' + (file-1) + (rank-1) +', #s' + (file-1) + (rank) +', #s' + (file-1) + (rank+1) +
                    ', #s' + (file) + (rank-1) +', #s' + (file) + (rank+1) +', #s' + (file+1) + (rank-1) +', #s' + 
                    (file+1) + (rank) +', #s' + (file+1) + (rank+1);
                    break;

                default:
                    console.log("Default Case - Piece check");
                    break;
                
            }

            console.log("Query String: " + queryString);
            squares = document.querySelectorAll(queryString);
            console.log(squares);

            for (var i=0; i<squares.length; i++) {
                console.log(squares[i]);
                squares[i].classList.add("highlighted-tile");
        
                if (squares[i].innerHTML == "") {
                    console.log("Square " + squares[i].id + " is clear");
                } else {
                    var otherPiece = squares[i].firstChild.classList[0];
                    //console.log("Other Piece: " + squares[i].firstChild.classList[0]);
                    //console.log("Square s" + fileString+rankString + " has a " + otherPiece);
                    console.log("Square " + squares[i].id + " has a " + otherPiece);
                }
            }

        }
        


    
    }

    
}
