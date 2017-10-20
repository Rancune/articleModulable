$(document).ready(function () {

    $(".container").sortable({
        containment: '.container',
        cursor: "move",
        revert: true
    });

    $(".draggable").each(function () {
        $(this).draggable({
            /*           containment: '#work',
                        connectToSortable: ".container",*/
            cursor: "grab",
            helper: "clone",
            revert: "invalid"
        });
    });

    $("#droppable").droppable({
        accept: ".draggable", //changer le nom de la classe
        drop: function (event, ui) {
            var $nbcol = $(ui.draggable).prop("id");
            /* $(ui.draggable).remove();*/
            /* alert($nbcol);*/
            var $prop = $(this);
            addRow($prop, $nbcol);
        }
    });




    function addRow(prop, nbcol) {

        if (nbcol == "column") {
            $(prop).append('<div class="row"><div class="col-md-12 coldroppable" id="col">1 colonne<div id="removemodul" class="btn-default"><i class="fa fa-trash" aria-hidden="true"></i> </div></div></div>');
        } else if (nbcol == "columnn") {
            $(prop).append("<div class='row'><div class='col-xs-6 coldroppable' id='cols'>2 colonne</div><div class='col-xs-6 coldroppable' id='cols'>2 colonne<div id='removemodul' class='btn-default'><i class='fa fa-trash' aria-hidden='true'></i> </div></div></div>");
        } else if (nbcol == "columnnn") {
            $(prop).append('<div class="row"><div class="col-md-4 coldroppable" id="colss">3 colonne</div><div class="col-md-4 coldroppable" id="colss">3 colonne</div><div class="col-md-4 coldroppable" id="colss">3 colonne<div id="removemodul" class="btn-default"><i class="fa fa-trash" aria-hidden="true"></i> </div></div></div>');
        } else {
            $(prop).append('<div class="row"><div class="col-md-3 coldroppable" id="colssss">4 colonne</div><div class="col-md-3 coldroppable" id="colssss">4 colonne</div><div class="col-md-3 coldroppable" id="colssss">4 colonne</div><div class="col-md-3 coldroppable" id="colssss">4 colonne<div id="removemodul" class="btn-default"><i class="fa fa-trash" aria-hidden="true"></i> </div></div></div>');
        }






        $(".coldroppable").each(function () {
            $(this).sortable({
                containment: '.container',
                cursor: "move",
                revert: true
            });


        });




        $(".draggablehtml").each(function () {
            $(this).draggable({
                /*  containment: '.coldroppable',*/
                connectToSortable: ".coldropable",
                cursor: "grab",
                helper: "clone",
                revert: "invalid"
            });
        });

        $(".coldroppable").droppable({
            /* accept: ".draggablehtml, #text",*/
            accept: function (d) {
                if (d.hasClass("draggablehtml") || (d.attr("id") == "text")) {
                    return true;
                }
            },
            drop: function (event, ui) {
                var $html = $(ui.draggable).prop("id");
                /* $(ui.draggable).remove();*/
                /* alert($html);*/
                var $prop = $(this);

                if ($html == "textdrag") {
                    addText($prop);

                } else if ($html == "imagedrag") {
                    addImage($prop);
                } else if ($html == "videodrag") {
                    addVideo($prop);
                } else {
                    addMaps($prop);
                }

            }
        });


    }

    function addText(prop) {
        var $id = generateUniqueId();
        $(prop).append('<div class="row"><div class="col-md-12" id="' + $id + '"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><div id="modiftext" class="btn"><i class="fa fa-font" aria-hidden="true"></i></div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i></div></div></div>');
        // console.log($id);
        return $id;
    }

    function addImage(prop) {
        var $id = generateUniqueId();
        $(prop).append('<div class="row"><div class="col-md-12" id="' + $id + '">     Image     <div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div></div></div>');

    };

    function addVideo(prop) {
        var $id = generateUniqueId();
        $(prop).append('<div class="row"><div class="col-md-12" id="' + $id + '"> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div></div></div>');

    };

    function addMaps(prop) {
        var ida = generateUniqueId();
        var idb = generateUniqueId();
        $(prop).append('<div class="row" id="tareume"><div class="col-md-12 map" data-long="44.833258" data-lati="-0.672765" id="' + ida + '"> <div class="mapb" id="' + idb + '"></div></div><div id="modifMap" class="btn"><i class="fa fa-map-marker" aria-hidden="true"></i></div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div></div>');
        createMap(idb);
    };


    //<div class="row"><div class="col-md-12 map" id="' + ida + '"> <div class="mapb" data-long="-12.043333" id="' + idb + '"></div></div><div id="modifMap" class="btn"><i class="fa fa-map-marker" aria-hidden="true"></i></div><div id="removemodul" class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </div></div>






    function generateUniqueId() {
        var $unique = new Date().getUTCMilliseconds();;
        return $unique;
    }


    var globalId = {};


    //j'aurai pu utiliser la function du on click pour englober les envent ouverture et fermeture de la modale
    // recup l'id unique à l'ouverture et l'utiliser dans la fermeture. 
    //la flemme. 
    $(document).on('click', '#modiftext', function () {
        var $text = $(this).parent().attr('id');
        globalId = $text;

        var $para = $(this).parent().find("p").html();

        console.log("id ouverture : " + $text);
        console.log("para ouverture : " + $para);

        $(".modal-body").find("p").html($para);

        $("#myModal").modal();
    });

    $("#myModal").on('hide.bs.modal', function () {

        var $para = $(".modal-body").find("p").html();

        console.log("id fermeture: " + globalId);
        console.log("para fermeture: " + $para);


        $("#" + globalId).find("p").html($para);

    });

    $(document).on('click', '#removemodul', function () {
        $(this).closest('.row').remove();
    });




    function initMap() { // Temporaire, fonction qui est appellé quand la map s'initialise.
        /*        var uluru = {
                    lat: -25.363,
                    lng: 131.044
                };
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });*/

        /*        var map = new GMaps({
                    el: '#map',
                    lat: -12.043333,
                    lng: -77.028333
                });*/

    };


    function createMap(id) {
        console.log("id map: #" + id);
        var map = new GMaps({
            el: '#' + id,
            lat: 44.833258,
            lng: -0.672765,
            //            zoom: 12,
            draggable: false

        });
    }

    function createMapLL(id, long, lati, zoom) {
        console.log("création de map avec long et lati: #" + id);
        var map = new GMaps({
            el: '#' + id,
            lat: lati,
            lng: long,
            zoom: zoom,
            draggable: false

        });
    }

    $(document).on('click', '#modifMap', function () {
        var text = $(this).parent().find(".map").attr('id');
        globalId = text;

        var long = $(this).parent().find(".map").data("long");
        var lati = $(this).parent().find(".map").data("lati");
        // var zoom = $(this).closest(".map").find("#zoom").val();


        console.log("id ouverture map: " + text);
        console.log("long ouverture map: " + long);
        console.log("lati ouverture map: " + lati);
        //  console.log("zoom ouverture map: " + zoom);


        $(".modal-body").find("#long").val(long);
        $(".modal-body").find("#lati").val(lati);
        //$(".modal-body").find("#zoom").val(zoom);




        $("#myModalMap").modal();

        var map = new GMaps({
            el: "#modalMap",
            lat: lati,
            lng: long,
            //            zoom: 12,
            width: 568,
            height: 400
        });
    });

    $("#myModalMap").on('hide.bs.modal', function () {

        var zoom = $(".modal-body").find("#zoom").val();
        var long = $(".modal-body").find("#long").val();
        var lati = $(".modal-body").find("#lati").val();

        console.log("id fermeture: " + globalId);
        console.log("Zoom fermeture: " + zoom);
        console.log("long fermeture: " + long);
        console.log("Lati fermeture: " + lati);

        var text = $("#" + globalId).children().remove();
        createMapLL(globalId, long, lati, zoom);

    });


});
