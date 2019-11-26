import * as React from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { Row, Col, Card, message } from "antd";
import "./dashboard.scss";

type IDashboardProps = Readonly<{}>;

interface IDashboardState {
  onEvent: Object;
}

class DashboardComp extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      onEvent: {
        click: this.onChartClick
      }
    };
  }

  onChartClick = () => {
    message.success("onClicked");
  };

  render() {
    const barOption = {
      title: {
        text: "Echarts 示例"
      },
      tooltip: {},
      legend: {
        data: ["销量", "指标"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "裤子", "高跟鞋"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 10, 36, 10, 10, 20]
        },
        {
          name: "指标",
          type: "bar",
          data: [50, 100, 306, 100, 100, 202]
        }
      ]
    };
    const pieOption = {
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}次 ({d}%)"
      },
      color: ["#2659a0", "#ebaa01", "#dd452c", "#5d814e"],
      series: [
        {
          name: "高开",
          type: "pie",
          radius: ["38%", "60%"],
          startAngle: 90,
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: "{d}%"
              },
              labelLine: {
                show: true
              }
            }
          },
          data: [
            {
              value: 25,
              name: "高开0～3%",
              itemStyle: {
                normal: {
                  color: "#2659a0",
                  label: { show: true },
                  labelLine: { show: true }
                }
              }
            },
            {
              value: 25,
              name: "高开3～7%",
              itemStyle: {
                normal: {
                  color: "#ebaa01",
                  label: { show: true },
                  labelLine: { show: true }
                }
              }
            },
            {
              value: 25,
              name: "高开7%以上",
              itemStyle: {
                normal: {
                  color: "#dd452c",
                  label: { show: true },
                  labelLine: { show: true }
                }
              }
            },
            {
              value: 25,
              name: "低开",
              itemStyle: {
                normal: {
                  color: "#5d814e",
                  label: { show: true },
                  labelLine: { show: true }
                }
              }
            }
          ]
        }
      ]
    };
    return (
      <div>
        <Card className="row first-row">
          <Row>
            <Col className="first-report-item fine" span={6}>
              <span className="num">1009</span>
              <br />
              <span className="label">今日新增</span>
            </Col>
            <Col className="first-report-item warning" span={6}>
              <span className="num">0</span>
              <br />
              <span className="label">新增源</span>
            </Col>
            <Col className="first-report-item" span={6}>
              <span className="num">10</span>
              <br />
              <span className="label">PV</span>
            </Col>
            <Col className="first-report-item danger" span={6}>
              <span className="num">0</span>
              <br />
              <span className="label">错误数</span>
            </Col>
          </Row>
        </Card>
        <Card className="row">
          <ReactEcharts
            option={barOption}
            notMerge={true}
            lazyUpdate={true}
          ></ReactEcharts>
        </Card>

        <Card className="row">
          <ReactEcharts
            option={pieOption}
            notMerge={true}
            lazyUpdate={true}
          ></ReactEcharts>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: { rss: any }) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComp);