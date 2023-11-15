var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_hasil_sna_fix_1 = new ol.format.GeoJSON();
var features_hasil_sna_fix_1 = format_hasil_sna_fix_1.readFeatures(json_hasil_sna_fix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hasil_sna_fix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hasil_sna_fix_1.addFeatures(features_hasil_sna_fix_1);
var lyr_hasil_sna_fix_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hasil_sna_fix_1, 
                style: style_hasil_sna_fix_1,
                interactive: true,
    title: 'hasil_sna_fix<br />\
    <img src="styles/legend/hasil_sna_fix_1_0.png" /> <br />\
    <img src="styles/legend/hasil_sna_fix_1_1.png" /> 500<br />\
    <img src="styles/legend/hasil_sna_fix_1_2.png" /> 1000<br />\
    <img src="styles/legend/hasil_sna_fix_1_3.png" /> 1500<br />\
    <img src="styles/legend/hasil_sna_fix_1_4.png" /> 2000<br />\
    <img src="styles/legend/hasil_sna_fix_1_5.png" /> 2500<br />\
    <img src="styles/legend/hasil_sna_fix_1_6.png" /> 3000<br />'
        });
var format_JaringanJalanUPVIIWonokromo_2 = new ol.format.GeoJSON();
var features_JaringanJalanUPVIIWonokromo_2 = format_JaringanJalanUPVIIWonokromo_2.readFeatures(json_JaringanJalanUPVIIWonokromo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanUPVIIWonokromo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanUPVIIWonokromo_2.addFeatures(features_JaringanJalanUPVIIWonokromo_2);
var lyr_JaringanJalanUPVIIWonokromo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanUPVIIWonokromo_2, 
                style: style_JaringanJalanUPVIIWonokromo_2,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanUPVIIWonokromo_2.png" /> Jaringan Jalan UP VII Wonokromo'
            });
var format_PointKesehatan_3 = new ol.format.GeoJSON();
var features_PointKesehatan_3 = format_PointKesehatan_3.readFeatures(json_PointKesehatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointKesehatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointKesehatan_3.addFeatures(features_PointKesehatan_3);
var lyr_PointKesehatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointKesehatan_3, 
                style: style_PointKesehatan_3,
                interactive: true,
    title: 'Point Kesehatan<br />\
    <img src="styles/legend/PointKesehatan_3_0.png" /> Posyandu<br />\
    <img src="styles/legend/PointKesehatan_3_1.png" /> Puskesmas<br />\
    <img src="styles/legend/PointKesehatan_3_2.png" /> Rumah Sakit<br />\
    <img src="styles/legend/PointKesehatan_3_3.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr_hasil_sna_fix_1.setVisible(true);lyr_JaringanJalanUPVIIWonokromo_2.setVisible(true);lyr_PointKesehatan_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_hasil_sna_fix_1,lyr_JaringanJalanUPVIIWonokromo_2,lyr_PointKesehatan_3];
lyr_hasil_sna_fix_1.set('fieldAliases', {'cost': 'cost', });
lyr_JaringanJalanUPVIIWonokromo_2.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_PointKesehatan_3.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_hasil_sna_fix_1.set('fieldImages', {'cost': 'TextEdit', });
lyr_JaringanJalanUPVIIWonokromo_2.set('fieldImages', {'Status': '', 'Nama': '', 'Keterangan': '', 'Sumber': '', 'Panjang': '', 'UP': '', });
lyr_PointKesehatan_3.set('fieldImages', {'id': 'TextEdit', 'Status': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_hasil_sna_fix_1.set('fieldLabels', {'cost': 'inline label', });
lyr_JaringanJalanUPVIIWonokromo_2.set('fieldLabels', {'Status': 'inline label', 'Nama': 'header label', 'Keterangan': 'inline label', 'Sumber': 'no label', 'Panjang': 'no label', 'UP': 'no label', });
lyr_PointKesehatan_3.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_PointKesehatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});