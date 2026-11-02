var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_SesuaiUntukPKL_1 = new ol.format.GeoJSON();
var features_SesuaiUntukPKL_1 = format_SesuaiUntukPKL_1.readFeatures(json_SesuaiUntukPKL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SesuaiUntukPKL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SesuaiUntukPKL_1.addFeatures(features_SesuaiUntukPKL_1);
var lyr_SesuaiUntukPKL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SesuaiUntukPKL_1, 
                style: style_SesuaiUntukPKL_1,
                popuplayertitle: "Sesuai Untuk PKL",
                interactive: true,
                title: '<img src="styles/legend/SesuaiUntukPKL_1.png" /> Sesuai Untuk PKL'
            });
var format_LOKSEM_2 = new ol.format.GeoJSON();
var features_LOKSEM_2 = format_LOKSEM_2.readFeatures(json_LOKSEM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKSEM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKSEM_2.addFeatures(features_LOKSEM_2);
var lyr_LOKSEM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOKSEM_2, 
                style: style_LOKSEM_2,
                popuplayertitle: "LOKSEM",
                interactive: true,
                title: '<img src="styles/legend/LOKSEM_2.png" /> LOKSEM'
            });
var format_LOKBIN_3 = new ol.format.GeoJSON();
var features_LOKBIN_3 = format_LOKBIN_3.readFeatures(json_LOKBIN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKBIN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKBIN_3.addFeatures(features_LOKBIN_3);
var lyr_LOKBIN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOKBIN_3, 
                style: style_LOKBIN_3,
                popuplayertitle: "LOKBIN",
                interactive: true,
                title: '<img src="styles/legend/LOKBIN_3.png" /> LOKBIN'
            });

lyr_googlehybrid_0.setVisible(true);lyr_SesuaiUntukPKL_1.setVisible(true);lyr_LOKSEM_2.setVisible(true);lyr_LOKBIN_3.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_SesuaiUntukPKL_1,lyr_LOKSEM_2,lyr_LOKBIN_3];
lyr_SesuaiUntukPKL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMZON': 'Subzona RDTR', 'WADMKK': 'Kota', 'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan', 'REMARK': 'Nama Obyek', 'KDB': 'KDB', 'KTB': 'KTB', 'KDH': 'KDH', 'BST': 'Bersyarat', 'IZN': 'Diizinkan', 'TBS': 'Terbatas Bersyarat', 'TBT': 'Terbatas', 'NM_JALAN': 'Nama Jalan', 'KLS_JALAN': 'Kelas Jalan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LOKSEM_2.set('fieldAliases', {'LAYER': 'LAYER', 'NAME': 'NAME', 'Keterangan': 'Keterangan', });
lyr_LOKBIN_3.set('fieldAliases', {'LAYER': 'LAYER', 'NAME': 'NAME', 'Keterangan': 'Keterangan', });
lyr_SesuaiUntukPKL_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMZON': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'REMARK': 'TextEdit', 'KDB': 'TextEdit', 'KTB': 'TextEdit', 'KDH': 'TextEdit', 'BST': 'TextEdit', 'IZN': 'TextEdit', 'TBS': 'TextEdit', 'TBT': 'TextEdit', 'NM_JALAN': 'TextEdit', 'KLS_JALAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LOKSEM_2.set('fieldImages', {'LAYER': 'TextEdit', 'NAME': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_LOKBIN_3.set('fieldImages', {'LAYER': 'TextEdit', 'NAME': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_SesuaiUntukPKL_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMZON': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDB': 'inline label - always visible', 'KTB': 'inline label - always visible', 'KDH': 'inline label - always visible', 'BST': 'inline label - always visible', 'IZN': 'inline label - always visible', 'TBS': 'inline label - always visible', 'TBT': 'inline label - always visible', 'NM_JALAN': 'inline label - always visible', 'KLS_JALAN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LOKSEM_2.set('fieldLabels', {'LAYER': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_LOKBIN_3.set('fieldLabels', {'LAYER': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_LOKBIN_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});