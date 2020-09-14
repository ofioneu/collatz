var grafico
var collatz
var vetp =[]
var valor

$(document).ready(function(){
    
    collatz = (n)=>{
        console.log(`O numero inicial foi: ${n}`)
        while(n!=1){
            if(n%2==0){
                console.log(`N par: ${n}`)
                n=n/2
                console.log("vetp:", vetp)
                vetp.push(n)               
                
            }
            else{
                console.log(`N impar: ${n}`)
                n=(3*n)+1
                vetp.push(n)
                
            }
        }
            
        console.log(`O numero final foi: ${n}`)
    
    }

    grafico = (vetp)=>{              
                Highcharts.chart('container', {
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Collatz'
                    },
                    subtitle: {
                        text: document.ontouchstart === undefined ?
                            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                    },
                    xAxis: {
                        type: 'number'
                    },
                    yAxis: {
                        title: {
                            text: 'Numero'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
        
                    series: [{
                        type: 'area',
                        name: 'Num',
                        data: vetp
                    }]
                });
            }


    $('#processar').click(function(){     
        valor = parseInt($('#entrada').val())
        if(Number.isInteger(valor)){
            collatz(valor)
            grafico(vetp)
            $('#num_vet').html(`<h1>${vetp}</h1>`)

        }
        else{
            alert("O numero digitado não é um Numero!")
        }         
        
        vetp=[]
        console.log(valor)
           
    })

    
    

})








