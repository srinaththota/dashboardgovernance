// Build data for a classic bar chart
const data = {}

// Labels are displayed in component, quantities are calculated to define height of each bar
data.dataSet = [
    {label: "Jan. '19'", value: 53},
    {label: "Feb. '19'", value: 165},
    {label: "Mar. '19'", value: 269},
    {label: "Apr. '19'", value: 344},
    {label: "May  '19'", value: 376},
    {label: "Jun. '19'", value: 410},
    {label: "Jul. '19'", value: 421},
    {label: "Aug. '19'", value: 405},
    {label: "Sep. '19'", value: 376},
    {label: "Oct. '19'", value: 359},
    {label: "Nov. '19'", value: 392},
    {label: "Dec. '19'", value: 433},
    {label: "Jan. '20'", value: 455},
    {label: "Feb. '20'", value: 478}
];

//Set margins for bar graph within svg element
data.margins = {top: 20, right: 20, bottom: 70, left: 40};

//Define label of y-axis
data.yAxisLabel = 'No of Commits!';

// Colors are optional for each bar
// If colors are not given, bars will default to 'steelblue'
data.fill = [];

//Define the width of the svg element on the page
data.width = 460;

//Define the height of the bar chart
data.height = 250;

// Define tick intervals for y-axis
data.ticks = 10;

//Define a class for the svg element for styling
data.barClass = 'bar';

/* EXAMPLE CSS

.bar text {
  font: 14px sans-serif;
  text-anchor: middle;
}

*/

export default data;