import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';
import Guangshan from '@/assets/map/Guangshan.json';

let routeData = {
  in: [
    [114.884072, 32.07297],
    [114.898601, 32.082204],
    [114.916763, 32.085001],
    [114.906857, 32.07297],
    [114.882421, 32.053661],
    [114.908508, 32.049743],
    [114.920395, 32.05618],
    [114.932613, 32.048904],
    [114.919405, 32.044145],
    [114.845873, 32.112865],
    [114.851374, 32.09236],
    [114.879614, 32.11038],
    [114.728146, 32.112244],
    [114.732181, 32.120941],
    [114.752352, 32.12529],
    [114.739882, 32.097953],
    [114.785726, 32.09205],
    [114.779858, 32.082728],
    [114.676068, 32.080864],
    [114.687804, 32.086768],
    [114.688904, 32.064393],
    [114.668, 32.065636],
    [114.691838, 32.057865],
    [114.770689, 32.046986],
    [114.780225, 32.023979],
    [114.749785, 32.029576],
    [114.670567, 31.979193],
    [114.69734, 31.993191],
    [114.688538, 31.979815],
    [114.667633, 31.958348],
    [114.681936, 31.958659],
    [114.812132, 32.035172],
    [114.822768, 32.047608],
    [114.851374, 32.042012],
    [114.867511, 32.036727],
    [114.820934, 32.023046],
    [114.852474, 32.020559],
    [114.736948, 31.923491],
    [114.761521, 31.93563],
    [114.801863, 31.949635],
    [114.824235, 31.946834],
    [114.781325, 31.930961],
    [114.720445, 31.903878],
    [114.733281, 31.896094],
    [114.599417, 31.987281],
    [114.604919, 31.96986],
    [114.622889, 31.961459],
    [114.616655, 31.953369],
    [114.659564, 31.878656],
    [114.673501, 31.869001],
    [114.690738, 31.876787],
    [114.701374, 31.88395],
    [114.712009, 31.869935],
    [114.683403, 31.858099],
    [114.750885, 31.830371],
    [114.769589, 31.833487],
    [114.805531, 31.847196],
    [114.797095, 31.841899],
    [114.763721, 31.821957],
    [114.89245, 31.87305],
    [114.896484, 31.885195],
    [114.873012, 31.856853],
    [114.899052, 31.854049],
    [114.883648, 31.832552],
    [114.903819, 31.973282],
    [114.879247, 31.95897],
    [114.891039, 31.957414],
    [114.893239, 31.942477],
    [114.888105, 31.927849],
    [114.873068, 31.916642],
    [114.973557, 31.914463],
    [114.981993, 31.905435],
    [114.976125, 31.885195],
    [114.96989, 31.87305],
    [114.984927, 31.865574],
    [114.994462, 31.852492],
    [114.980892, 31.837226],
    [114.98676, 31.79079],
    [114.997396, 31.803882],
    [115.009866, 31.798271],
    [114.998863, 31.782373],
    [115.068179, 31.801388],
    [115.078814, 31.810738],
    [115.089817, 31.773331],
    [114.957054, 31.978571],
    [114.950085, 31.973282],
    [114.979425, 31.959592],
    [114.976858, 31.93065],
    [114.997763, 31.90668],
    [115.02747, 31.888932],
  ],
  out: [
    [114.95299, 32.058131],
    [114.977719, 32.055414],
    [114.963065, 32.047651],
    [114.982756, 32.043381],
    [114.790419, 32.116329],
    [114.813774, 32.111287],
    [114.835298, 32.086458],
    [114.811942, 32.08413],
    [114.844915, 32.061624],
    [114.720811, 32.075982],
    [114.749662, 32.074818],
    [114.748288, 32.058131],
    [114.727222, 32.060071],
    [114.705241, 32.039499],
    [114.728138, 32.040276],
    [114.662652, 32.031735],
    [114.672727, 32.034841],
    [114.655783, 32.019311],
    [114.632428, 32.01504],
    [114.649372, 31.999895],
    [114.719895, 31.956388],
    [114.734092, 31.955611],
    [114.716232, 31.941234],
    [114.700204, 31.931129],
    [114.719895, 31.926077],
    [114.757447, 31.969209],
    [114.738671, 31.980086],
    [114.752409, 31.994846],
    [114.764774, 31.985136],
    [114.72997, 31.990962],
    [114.644334, 31.921413],
    [114.668147, 31.902365],
    [114.673185, 31.914805],
    [114.737755, 31.848309],
    [114.728138, 31.859201],
    [114.728138, 31.861923],
    [114.707989, 31.839362],
    [114.725391, 31.826134],
    [114.807821, 31.988243],
    [114.83026, 31.999507],
    [114.869644, 31.997176],
    [114.825681, 31.97931],
    [114.79912, 31.978921],
    [114.765232, 31.896922],
    [114.800494, 31.910529],
    [114.845372, 31.918692],
    [114.840793, 31.899643],
    [114.800952, 31.896533],
    [114.836214, 31.887201],
    [114.851326, 31.888757],
    [114.945205, 31.921413],
    [114.957569, 31.909362],
    [114.961233, 31.895367],
    [114.934672, 31.886813],
    [114.946121, 31.877091],
    [114.816522, 31.841307],
    [114.835298, 31.842085],
    [114.855905, 31.846753],
    [114.856821, 31.828468],
    [114.850868, 31.816795],
    [114.941083, 31.849476],
    [114.935588, 31.820297],
    [114.952074, 31.811347],
    [114.920018, 31.803563],
    [115.018018, 31.839751],
    [115.009317, 31.854533],
    [115.037252, 31.845586],
    [115.054196, 31.835472],
    [115.023513, 31.828079],
    [114.988709, 31.98902],
    [114.994205, 31.994458],
    [114.98184, 31.965324],
    [115.008401, 31.929575],
    [115.03771, 31.912472],
    [115.060149, 31.915193],
    [115.05099, 31.896533],
    [115.08213, 31.896144],
    [115.083046, 31.875924],
    [115.103196, 31.83197],
    [115.098616, 31.847142],
    [115.093121, 31.81913],
  ],
};
echarts.registerMap('Guangshan', Guangshan);
const TravelOD = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const getMapOption = () => {
    let o = { name: '测试', lngLat: [114.914069, 32.010598] };
    let convertData = function (origin, data, flag) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let fromCoord = data[i];
        let toCoord = origin.lngLat;
        if (fromCoord && toCoord) {
          res.push({
            coords: [flag ? fromCoord : toCoord, flag ? toCoord : fromCoord],
          });
        }
      }
      return res;
    };
    let series = [];
    [[o, routeData.in]].forEach(function (item, i) {
      series.push(
        {
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 5, //图标大小
          },
          lineStyle: {
            width: 1, //尾迹线条宽度
            opacity: 0.8, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
          },
          data: convertData(item[0], item[1], true),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4, //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            show: false,
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return 2; //圆环大小
          },
          itemStyle: {
            show: false,
            color: '#51e9fd',
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          data: item[1].map(function (dataItem) {
            return {
              value: dataItem.concat([1]),
            };
          }),
        },
        //被攻击点
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4,
          },
          label: {
            show: true,
            position: 'right',
            formatter: function (param) {
              return param.data.name.name;
            },
            color: '#ee6b30',
            fontSize: 16,
            fontWeight: 600,
          },
          itemStyle: {
            color: '#ee6b30',
          },
          emphasis: {
            label: {
              fontSize: 18,
            },
          },
          symbol: 'pin',
          symbolSize: 50,
          data: [
            {
              name: item[0],
              value: item[0].lngLat.concat([1]),
            },
          ],
        },
      );
    });

    [[o, routeData.out]].forEach(function (item, i) {
      series.push(
        {
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 5, //图标大小
          },
          lineStyle: {
            width: 1, //尾迹线条宽度
            opacity: 0.8, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
            color: '#f1c27b',
          },
          data: convertData(item[0], item[1], false),
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4, //波纹圆环最大限制，值越大波纹越大
          },
          label: {
            show: false,
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return 4; //圆环大小
          },
          itemStyle: {
            show: false,
            color: '#f1c27b',
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          data: item[1].map(function (dataItem) {
            return {
              value: dataItem.concat([1]),
            };
          }),
        },
      );
    });

    return {
      backgroundColor: '#244f72',
      tooltip: {
        show: false,
      },
      color: ['#34c6bb'],
      geo: {
        silent: false,
        map: 'Guangshan',
        zoom: 2,
        top: 'center',
        label: {
          show: true,
          color: '#aaa',
        },
        roam: true,
        itemStyle: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0.05)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, 0.1)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          borderColor: '#6c7f7f',
          borderWidth: 1.5,
          shadowColor: '#6c7f7f',
          shadowOffsetX: 0,
          shadowOffsetY: 1,
          shadowBlur: 10,
        },
        emphasis: {
          label: {
            color: '#fff',
          },
          itemStyle: {
            areaColor: 'rgba(37, 43, 61, .1)', //悬浮背景
          },
        },
      },
      series: series,
    };
  };

  return (
    <div className={styles.wrapperBox}>
      <ReactEcharts
        option={getMapOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default TravelOD;
