var wms_layers = [];


        var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZimbabweProvinces_1 = new ol.format.GeoJSON();
var features_ZimbabweProvinces_1 = format_ZimbabweProvinces_1.readFeatures(json_ZimbabweProvinces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZimbabweProvinces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZimbabweProvinces_1.addFeatures(features_ZimbabweProvinces_1);
var lyr_ZimbabweProvinces_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZimbabweProvinces_1, 
                style: style_ZimbabweProvinces_1,
                popuplayertitle: 'Zimbabwe Provinces',
                interactive: false,
                title: '<img src="styles/legend/ZimbabweProvinces_1.png" /> Zimbabwe Provinces'
            });
var format_UnderutilisedDams_2 = new ol.format.GeoJSON();
var features_UnderutilisedDams_2 = format_UnderutilisedDams_2.readFeatures(json_UnderutilisedDams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnderutilisedDams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnderutilisedDams_2.addFeatures(features_UnderutilisedDams_2);
var lyr_UnderutilisedDams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnderutilisedDams_2, 
                style: style_UnderutilisedDams_2,
                popuplayertitle: 'Underutilised Dams',
                interactive: true,
                title: '<img src="styles/legend/UnderutilisedDams_2.png" /> Underutilised Dams'
            });
var format_IrrigationSchemes_3 = new ol.format.GeoJSON();
var features_IrrigationSchemes_3 = format_IrrigationSchemes_3.readFeatures(json_IrrigationSchemes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationSchemes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationSchemes_3.addFeatures(features_IrrigationSchemes_3);
var lyr_IrrigationSchemes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationSchemes_3, 
                style: style_IrrigationSchemes_3,
                popuplayertitle: 'Irrigation Schemes',
                interactive: true,
                title: '<img src="styles/legend/IrrigationSchemes_3.png" /> Irrigation Schemes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ZimbabweProvinces_1.setVisible(true);lyr_UnderutilisedDams_2.setVisible(true);lyr_IrrigationSchemes_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZimbabweProvinces_1,lyr_UnderutilisedDams_2,lyr_IrrigationSchemes_3];
lyr_ZimbabweProvinces_1.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'PROV_CODE': 'PROV_CODE', });
lyr_UnderutilisedDams_2.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'CATCHMENT': 'CATCHMENT', 'DAM NAME': 'DAM NAME', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'ADDITIONAL HECTARAGE': 'ADDITIONAL HECTARAGE', });
lyr_IrrigationSchemes_3.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'CATCHMENT': 'CATCHMENT', 'IRRIGATION SCHEME': 'IRRIGATION SCHEME', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Estimated Additional  Land': 'Estimated Additional  Land', });
lyr_ZimbabweProvinces_1.set('fieldImages', {'PROVINCE': 'TextEdit', 'PROV_CODE': 'Range', });
lyr_UnderutilisedDams_2.set('fieldImages', {'PROVINCE': 'TextEdit', 'CATCHMENT': 'TextEdit', 'DAM NAME': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'ADDITIONAL HECTARAGE': 'TextEdit', });
lyr_IrrigationSchemes_3.set('fieldImages', {'PROVINCE': 'TextEdit', 'CATCHMENT': 'TextEdit', 'IRRIGATION SCHEME': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Estimated Additional  Land': 'Range', });
lyr_ZimbabweProvinces_1.set('fieldLabels', {'PROVINCE': 'no label', 'PROV_CODE': 'no label', });
lyr_UnderutilisedDams_2.set('fieldLabels', {'PROVINCE': 'inline label - always visible', 'CATCHMENT': 'inline label - always visible', 'DAM NAME': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'ADDITIONAL HECTARAGE': 'inline label - always visible', });
lyr_IrrigationSchemes_3.set('fieldLabels', {'PROVINCE': 'inline label - always visible', 'CATCHMENT': 'inline label - always visible', 'IRRIGATION SCHEME': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Estimated Additional  Land': 'inline label - always visible', });
lyr_IrrigationSchemes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});