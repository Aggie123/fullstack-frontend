export const optionGender = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    legend: {
        data: ['Male', 'Female', ]
    },
    series: [{
    	name:'Male',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    },{
    	name:'Female',
        data: [12, 20, 15, 80, 70, 70, 80],
        type: 'bar'
    }]
};