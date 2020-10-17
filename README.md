# Leaflet Homework - Visualizing Data with Leaflet

## Background

![1-Logo](Images/1-Logo.png)

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

Below I explain how I created this project.

![2-BasicMap](Images/2-BasicMap.png)


1. **Got my data set**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and I picked a data set to visualize. I used the URL of this JSON to pull in the data for my visualization.

   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualize the Data**

   I created a map using Leaflet that plots all of the earthquakes from my data set based on their longitude and latitude.

   * I created data markers that use size to indicate the magnitude of the earthquake, and color to indicate the depth of the earthquake. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.

   * I included popups that provide additional information about the earthquake when a marker is clicked.

   * I created a legend that will provide context for my map data.

- - -
### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
