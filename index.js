<!-- Styles -->
<style>
#chartdiv {
  width: 100%;
  height: 500px;
}

</style>

<!-- Resources -->
<script src="https://cdn.amcharts.com/lib/4/core.js"></script>
<script src="https://cdn.amcharts.com/lib/4/maps.js"></script>
<script src="https://cdn.amcharts.com/lib/4/geodata/worldLow.js"></script>
<script src="https://cdn.amcharts.com/lib/4/geodata/usaLow.js"></script>
<script src="https://cdn.amcharts.com/lib/4/geodata/canadaLow.js"></script>
<script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

<!-- Chart code -->
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Series for World map
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.exclude = ["AQ"];
worldSeries.useGeodata = true;

var polygonTemplate = worldSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0);
polygonTemplate.nonScalingStroke = true;

// Hover state
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Series for United States map
var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
usaSeries.geodata = am4geodata_usaLow;

var usPolygonTemplate = usaSeries.mapPolygons.template;
usPolygonTemplate.tooltipText = "{name}";
usPolygonTemplate.fill = chart.colors.getIndex(1);
usPolygonTemplate.nonScalingStroke = true;

// Hover state
var hs = usPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Series for Canada map
var canadaSeries = chart.series.push(new am4maps.MapPolygonSeries());
canadaSeries.geodata = am4geodata_canadaLow;

var caPolygonTemplate = canadaSeries.mapPolygons.template;
caPolygonTemplate.tooltipText = "{name}";
caPolygonTemplate.fill = chart.colors.getIndex(1);
caPolygonTemplate.nonScalingStroke = true;

// Hover state
var hs = caPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#367B25");

}); // end am4core.ready()
</script>

<!-- HTML -->
<div id="chartdiv"></div>
