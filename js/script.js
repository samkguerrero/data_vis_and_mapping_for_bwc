//MAP
function init() {

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnd2F0ZXJzYW0iLCJhIjoiY2oydzNpcGpsMDA5eTJ4cW9rejc4Nm0zOCJ9.oBZa3Bwk-KlRSV6uN7xlqQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [ -112.357175, 42.878066],
  zoom: 9,
  minZoom: 3,
  attributionControl: false
});

var location  = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': '/data_vis_and_mapping_for_bwc/shapes/dunits.geojson',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
})();

const allFeatures = location.features;

const fs1cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const fs1complete = fs1cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs1incomplete = fs1cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs1pending = fs1cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs1refusal = fs1cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs1assigned = fs1cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs2cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const fs2complete = fs2cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs2incomplete = fs2cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs2pending = fs2cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs2refusal = fs2cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs2assigned = fs2cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs3cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const fs3complete = fs3cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs3incomplete = fs3cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs3pending = fs3cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs3refusal = fs3cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs3assigned = fs3cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs4cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const fs4complete = fs4cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs4incomplete = fs4cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs4pending = fs4cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs4refusal = fs4cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs4assigned = fs4cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs5cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const fs5complete = fs5cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs5incomplete = fs5cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs5pending = fs5cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs5refusal = fs5cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs5assigned = fs5cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs6cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const fs6complete = fs6cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs6incomplete = fs6cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs6pending = fs6cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs6refusal = fs6cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs6assigned = fs6cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const fs7cases = allFeatures.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

const fs7complete = fs7cases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const fs7incomplete = fs7cases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const fs7pending = fs7cases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const fs7refusal = fs7cases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const fs7assigned = fs7cases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

var ctx = $("#myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7"],
        datasets: [{
            label: '# of Complete',
            data: [fs1complete.length, fs2complete.length, fs3complete.length, fs4complete.length, fs5complete.length, fs6complete.length, fs7complete.length],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        },{
            label: '# of Incomplete',
            data: [fs1incomplete.length, fs2incomplete.length, fs3incomplete.length, fs4incomplete.length, fs5incomplete.length, fs6incomplete.length, fs7incomplete.length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },{
            label: '# of Pending',
            data: [fs1pending.length, fs2pending.length, fs3pending.length, fs4pending.length, fs5pending.length, fs6pending.length, fs7pending.length],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        },{
            label: '# of Refusal',
            data: [fs1refusal.length, fs2refusal.length, fs3refusal.length, fs4refusal.length, fs5refusal.length, fs6refusal.length, fs7refusal.length],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1
        },{
            label: '# of Assigned',
            data: [fs1assigned.length, fs2assigned.length, fs3assigned.length, fs4assigned.length, fs5assigned.length, fs6assigned.length, fs7assigned.length],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const allFeaturespie = location.features;

const lincolncreekcases = allFeaturespie.filter(function(unit){
  return unit.properties.NAME === 'Lincoln Creek'
})

const lincolncreekcomplete = lincolncreekcases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const lincolncreekincomplete = lincolncreekcases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const lincolncreekpending = lincolncreekcases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const lincolncreekrefusal = lincolncreekcases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const lincolncreekassigned = lincolncreekcases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

var ctx = $("#myChart1");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [lincolncreekcomplete.length, lincolncreekpending.length, lincolncreekpending.length, lincolncreekrefusal.length, lincolncreekassigned.length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

const gibsoncases = allFeaturespie.filter(function(unit){
  return unit.properties.NAME === 'Gibson'
})

const gibsoncomplete = gibsoncases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const gibsonincomplete = gibsoncases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const gibsonpending = gibsoncases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const gibsonrefusal = gibsoncases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const gibsonassigned = gibsoncases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

var ctx = $("#myChart2");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [gibsoncomplete.length, gibsonpending.length, gibsonpending.length, gibsonrefusal.length, gibsonassigned.length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

const forthallcases = allFeaturespie.filter(function(unit){
  return unit.properties.NAME === 'Fort Hall'
})

const forthallcomplete = forthallcases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const forthallincomplete = forthallcases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const forthallpending = forthallcases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const forthallrefusal = forthallcases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const forthallassigned = forthallcases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

var ctx = $("#myChart3");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [forthallcomplete.length, forthallpending.length, forthallpending.length, forthallrefusal.length, forthallassigned.length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

const bannockcreekcases = allFeaturespie.filter(function(unit){
  return unit.properties.NAME === 'Bannock Creek'
})

const bannockcreekcomplete = bannockcreekcases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const bannockcreekincomplete = bannockcreekcases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const bannockcreekpending = bannockcreekcases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const bannockcreekrefusal = bannockcreekcases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const bannockcreekassigned = bannockcreekcases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

var ctx = $("#myChart4");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [bannockcreekcomplete.length, bannockcreekpending.length, bannockcreekpending.length, bannockcreekrefusal.length, bannockcreekassigned.length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

const rossforkcases = allFeaturespie.filter(function(unit){
  return unit.properties.NAME === 'Ross Fork'
})

const rossforkcomplete = rossforkcases.filter(function(unit){
  return unit.properties.status === 'complete'
})

const rossforkincomplete = rossforkcases.filter(function(unit){
  return unit.properties.status === 'incomplete'
})

const rossforkpending = rossforkcases.filter(function(unit){
  return unit.properties.status === 'pending'
})

const rossforkrefusal = rossforkcases.filter(function(unit){
  return unit.properties.status === 'refusal'
})

const rossforkassigned = rossforkcases.filter(function(unit){
  return unit.properties.status === 'assigned'
})

const lincolncreekfs1 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const lincolncreekfs2 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const lincolncreekfs3 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const lincolncreekfs4 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const lincolncreekfs5 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const lincolncreekfs6 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const lincolncreekfs7 = lincolncreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

const gibsonfs1 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const gibsonfs2 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const gibsonfs3 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const gibsonfs4 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const gibsonfs5 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const gibsonfs6 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const gibsonfs7 = gibsoncases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

const forthallfs1 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const forthallfs2 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const forthallfs3 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const forthallfs4 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const forthallfs5 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const forthallfs6 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const forthallfs7 = forthallcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

const bannockcreekfs1 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const bannockcreekfs2 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const bannockcreekfs3 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const bannockcreekfs4 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const bannockcreekfs5 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const bannockcreekfs6 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const bannockcreekfs7 = bannockcreekcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

const rossforkfs1 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs1'
})

const rossforkfs2 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs2'
})

const rossforkfs3 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs3'
})

const rossforkfs4 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs4'
})

const rossforkfs5 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs5'
})

const rossforkfs6 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs6'
})

const rossforkfs7 = rossforkcases.filter(function(unit){
  return unit.properties.fieldstaff === 'fs7'
})

var ctx = $("#myChart5");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [rossforkcomplete.length, rossforkpending.length, rossforkpending.length, rossforkrefusal.length, rossforkassigned.length],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart1ra");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [lincolncreekcomplete.length, lincolncreekpending.length, lincolncreekpending.length, lincolncreekrefusal.length, lincolncreekassigned.length],
            label: "Lincoln Creek",
            backgroundColor: "rgba(169,229,187,0.2)",
            borderColor: "rgba(169,229,187,1)",
            pointBackgroundColor: "rgba(169,229,187,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(169,229,187,1)"
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'radar',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart2ra");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [gibsoncomplete.length, gibsonpending.length, gibsonpending.length, gibsonrefusal.length, gibsonassigned.length],
            label: "Gibson",
            backgroundColor: "rgba(73,198,229,0.2)",
            borderColor: "rgba(73,198,229,1)",
            pointBackgroundColor: "rgba(73,198,229,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(73,198,229,1)"
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'radar',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart3ra");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [forthallcomplete.length, forthallpending.length, forthallpending.length, forthallrefusal.length, forthallassigned.length],
            label: "Fort Hall",
            backgroundColor: "rgba(247,179,43,0.2)",
            borderColor: "rgba(247,179,43,1)",
            pointBackgroundColor: "rgba(247,179,43,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(247,179,43,1)"
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'radar',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart4ra");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [bannockcreekcomplete.length, bannockcreekpending.length, bannockcreekpending.length, bannockcreekrefusal.length, bannockcreekassigned.length],
            label: "Bannock Creek",
            backgroundColor: "rgba(247,44,37,0.2)",
            borderColor: "rgba(247,44,37,1)",
            pointBackgroundColor: "rgba(247,44,37,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(247,44,37,1)"
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'radar',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart5ra");

var data = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
            data: [rossforkcomplete.length, rossforkpending.length, rossforkpending.length, rossforkrefusal.length, rossforkassigned.length],
            label: "Ross Fork",
            backgroundColor: "rgba(45,30,47,0.2)",
            borderColor: "rgba(45,30,47,1)",
            pointBackgroundColor: "rgba(45,30,47,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(45,30,47,1)",
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'radar',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var data1 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs1complete.length, fs1incomplete.length, fs1pending.length, fs1refusal.length, fs1assigned.length]
        },
    ]
};

var data2 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs2complete.length, fs2incomplete.length, fs2pending.length, fs2refusal.length, fs2assigned.length]
        },
    ]
};

var data3 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs3complete.length, fs3incomplete.length, fs3pending.length, fs3refusal.length, fs3assigned.length]
        },
    ]
};

var data4 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs4complete.length, fs4incomplete.length, fs4pending.length, fs4refusal.length, fs4assigned.length]
        },
    ]
};

var data5 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs5complete.length, fs5incomplete.length, fs5pending.length, fs5refusal.length, fs5assigned.length]
        },
    ]
};

var data6 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs6complete.length, fs6incomplete.length, fs6pending.length, fs6refusal.length, fs6assigned.length]
        },
    ]
};

var data7 = {
    labels: ["Complete", "Incomplete", "Pending", "Refusal", "Assigned"],
    datasets: [
        {
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255,99,132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ],
            data: [fs7complete.length, fs7incomplete.length, fs7pending.length, fs7refusal.length, fs7assigned.length]
        },
    ]
};

var ctx1 = $("#myChart1po");

new Chart(ctx1, {
    type: "polarArea",
    data: data1,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx2 = $("#myChart2po");

new Chart(ctx2, {
    type: "polarArea",
    data: data2,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx3 = $("#myChart3po");

new Chart(ctx3, {
    type: "polarArea",
    data: data3,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx4 = $("#myChart4po");

new Chart(ctx4, {
    type: "polarArea",
    data: data4,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx5 = $("#myChart5po");

new Chart(ctx5, {
    type: "polarArea",
    data: data5,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx6 = $("#myChart6po");

new Chart(ctx6, {
    type: "polarArea",
    data: data6,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx7 = $("#myChart7po");

new Chart(ctx7, {
    type: "polarArea",
    data: data7,
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});

var ctx = $("#myChart1do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [lincolncreekfs1.length, lincolncreekfs2.length, lincolncreekfs3.length, lincolncreekfs4.length, lincolncreekfs5.length, lincolncreekfs6.length, lincolncreekfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart2do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [gibsonfs1.length, gibsonfs2.length, gibsonfs3.length, gibsonfs4.length, gibsonfs5.length, gibsonfs6.length, gibsonfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart3do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [forthallfs1.length, forthallfs2.length, forthallfs3.length, forthallfs4.length, forthallfs5.length, forthallfs6.length, forthallfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart4do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [bannockcreekfs1.length, bannockcreekfs2.length, bannockcreekfs3.length, bannockcreekfs4.length, bannockcreekfs5.length, bannockcreekfs6.length, bannockcreekfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart5do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [rossforkfs1.length, rossforkfs2.length, rossforkfs3.length, rossforkfs4.length, rossforkfs5.length, rossforkfs6.length, rossforkfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart1do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [lincolncreekfs1.length, lincolncreekfs2.length, lincolncreekfs3.length, lincolncreekfs4.length, lincolncreekfs5.length, lincolncreekfs6.length, lincolncreekfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart2do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [gibsonfs1.length, gibsonfs2.length, gibsonfs3.length, gibsonfs4.length, gibsonfs5.length, gibsonfs6.length, gibsonfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart3do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [forthallfs1.length, forthallfs2.length, forthallfs3.length, forthallfs4.length, forthallfs5.length, forthallfs6.length, forthallfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart4do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [bannockcreekfs1.length, bannockcreekfs2.length, bannockcreekfs3.length, bannockcreekfs4.length, bannockcreekfs5.length, bannockcreekfs6.length, bannockcreekfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var ctx = $("#myChart5do");

var data = {
    labels: ["Field Staff 1", "Field Staff 2", "Field Staff 3", "Field Staff 4", "Field Staff 5", "Field Staff 6", "Field Staff 7" ],
    datasets: [
        {
            data: [rossforkfs1.length, rossforkfs2.length, rossforkfs3.length, rossforkfs4.length, rossforkfs5.length, rossforkfs6.length, rossforkfs7.length],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255,255,111, 1)',
              'rgba(93,47,139, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(75, 192, 192, 0.8)',
              'rgba(255,99,132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(0, 0, 0, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255,255,111, 0.8)',
              'rgba(93,47,139, 0.8)',
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
    options: {
      animation:{
        animateScale:true
      }
    }
});

var zones  = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': '/data_viz_demos/shapes/dzones.geojson',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
})();

var filterGroup = document.getElementById('filter-group');
var allLayers = [];

map.on('load', function () {

  map.addSource("zones", {
    "type": "geojson",
    "data": zones
  });

  map.addLayer({
    'id': 'res',
    'type': 'fill',
    'source': 'zones',
    'layout': {},
    'paint': {
        'fill-color': 'rgba(200, 100, 240, 0)',
        'fill-outline-color': 'rgba(0, 0, 0, 1)',
    },
    'interactive': true
  });

  map.addSource("location", {
    "type": "geojson",
    "data": location
  });

  location.features.forEach(function(feature) {
      var symbol = feature.properties['status'];
      var layerID = 'status-' + symbol;

      if (allLayers.indexOf(layerID) === -1) {
        allLayers.push(layerID)
      }

      // Add a layer for this symbol type if it hasn't been added already.
      if (!map.getLayer(layerID)) {
          map.addLayer({
              "id": layerID,
              "type": "circle",
              "source": "location",
              "layout": {},
              "paint": {
                "circle-color": {
                  property: 'status',
                  type: 'categorical',
                  stops: [
                    ['complete', '#A7C636'],
                    ['incomplete', '#ED5151'],
                    ['pending', '#FC921F'],
                    ['refusal', '#1A1A1A'],
                    ['unassigned', '#999999'],
                    ['assigned', '#149ECE']
                  ]
                },
                "circle-radius": 6,
                "circle-opacity": 0.7,
              },
              "filter": ["==", "status", symbol]
          });

          var popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false
          });

          map.on('mouseenter', layerID, function(e) {
              // Change the cursor style as a UI indicator.
              map.getCanvas().style.cursor = 'pointer';

              // Populate the popup and set its coordinates
              // based on the feature found.
              popup.setLngLat(e.features[0].geometry.coordinates)
                  .setHTML('<div><h2>Unit: ' + e.features[0].properties.unitid + '</h2><p>Status: ' + e.features[0].properties.status + '</p></div>')
                  .addTo(map);
          });

          map.on('mouseleave', layerID, function() {
              map.getCanvas().style.cursor = '';
              popup.remove();
          });

          map.on('click', layerID, function(e) {
            map.zoomTo({center: e.features[0].geometry.coordinates});
            //map.zoomIn(10)
          });

          // Add checkbox and label elements for the layer.
          var input = document.createElement('input');
          input.type = 'checkbox';
          input.id = layerID;
          input.checked = true;
          filterGroup.appendChild(input);

          var label = document.createElement('label');
          label.setAttribute('for', layerID);
          label.id = layerID;
          label.textContent = symbol;
          filterGroup.appendChild(label);

          // When the checkbox changes, update the visibility of the layer.
          input.addEventListener('change', function(e) {
              map.setLayoutProperty(layerID, 'visibility',
                  e.target.checked ? 'visible' : 'none');
          });
      }
  });

  // map.addLayer({
  //   'id': 'client',
  //   'type': 'circle',
  //   'source': 'location',
  //   'layout': {},
  //   'paint': {
  //     'circle-color': {
  //       property: 'status',
  //       type: 'categorical',
  //       stops: [
  //         ['complete', '#A7C636'],
  //         ['incomplete', '#ED5151'],
  //         ['pending', '#FC921F'],
  //         ['refusal', '#1A1A1A'],
  //         ['unassigned', '#999999'],
  //         ['assigned', '#149ECE']
  //       ]
  //     },
  //     'circle-radius': 6,
  //     'circle-opacity': 0.7
  //   },
  //   'interactive': true,
  // });

});

}
window.onload = init();
