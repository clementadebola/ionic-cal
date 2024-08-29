import React, { useState, useEffect } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonContent,
  IonApp,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const StatsPage = () => {
  const [stats, setStats] = useState({
    weeklyActivity: [
      { date: "Mon", usage: 50 },
      { date: "Tue", usage: 150 },
      { date: "Wed", usage: 100 },
      { date: "Thu", usage: 200 },
      { date: "Fri", usage: 80 },
      { date: "Sat", usage: 180 },
      { date: "Sun", usage: 130 },
    ],
    appUsage: [
      { app: "TikTok", usage: "6h 7m" },
      { app: "YouTube", usage: "1h 51m" },
      { app: "WhatsApp Business", usage: "1h 43m" },
    ],
  });

  const [selectedView, setSelectedView] = useState("WEEK");
  const [previousWeek, setPreviousWeek] = useState(null);

  useEffect(() => {
    // Fetch stats data from an API or generate random data
    const fetchStats = async () => {
      const response = await fetch("/api/stats");
      const data = await response.json();
      setStats(data);

      // Calculate the previous week's data
      const prevWeekData = {
        weeklyActivity: data.weeklyActivity.map((day, index) => ({
          date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
          usage: Math.floor(Math.random() * 200),
        })),
        appUsage: data.appUsage,
      };
      setPreviousWeek(prevWeekData);
    };
    fetchStats();
  }, []);

  const handleViewChange = (view) => {
    setSelectedView(view.toUpperCase());
  };

  return (
    <IonApp>
      <StyledPage>
        <Header>
          <IonToolbar>
            <IonTitle>Statistics</IonTitle>
          </IonToolbar>
        </Header>

        <IonContent fullscreen={true}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="12" sizeLg="12">
                <WeeklyActivityCard>
                  <IonCardHeader>
                    <ViewSelectorContainer>
                      <IonButton
                        onClick={() => handleViewChange("week")}
                        className={selectedView === "WEEK" ? "active" : ""}
                      >
                        WEEK
                      </IonButton>
                      <IonButton
                        onClick={() => handleViewChange("usage time")}
                        className={
                          selectedView === "USAGE TIME" ? "active" : ""
                        }
                      >
                        USAGE TIME
                      </IonButton>
                    </ViewSelectorContainer>
                  </IonCardHeader>
                  <IonCardContentStyled>
                    <WeeklyActivityChartContainer>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChartStyled
                          data={
                            selectedView === "WEEK"
                              ? stats.weeklyActivity
                              : previousWeek?.weeklyActivity
                          }
                        >
                          <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis
                            type="number"
                            domain={[0, "dataMax"]}
                            axisLine={false}
                            tickLine={false}
                          />
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                          />
                          <Tooltip />
                          <Bar
                            dataKey="usage"
                            fill="#8F46AC"
                            radius={[10, 10, 0, 0]}
                          />
                        </BarChartStyled>
                      </ResponsiveContainer>
                    </WeeklyActivityChartContainer>
                    <DailyAverageContainer>
                      <DailyAverageText>Daily avg</DailyAverageText>
                      <DailyAverageValue>
                        {selectedView === "WEEK"
                          ? `${
                              stats.weeklyActivity.reduce(
                                (total, day) => total + day.usage,
                                0
                              ) / 7
                            }h ${Math.floor(
                              stats.weeklyActivity.reduce(
                                (total, day) => total + day.usage,
                                0
                              ) % 60
                            )}m`
                          : `${
                              previousWeek?.weeklyActivity.reduce(
                                (total, day) => total + day.usage,
                                0
                              ) / 7
                            }h ${Math.floor(
                              previousWeek?.weeklyActivity.reduce(
                                (total, day) => total + day.usage,
                                0
                              ) % 60
                            )}m`}
                      </DailyAverageValue>
                    </DailyAverageContainer>
                  </IonCardContentStyled>
                </WeeklyActivityCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <AppUsageCard>
                  <IonCardHeader>App Usage</IonCardHeader>
                  <IonCardContentStyled>
                    {stats.appUsage.map((app, index) => (
                      <AppUsageItem key={index}>
                        <AppIcon>{app.app[0]}</AppIcon>
                        <AppName>{app.app}</AppName>
                        <AppUsage>{app.usage}</AppUsage>
                      </AppUsageItem>
                    ))}
                    <BuyPremiumButton>
                      Buy premium to see 102 more
                    </BuyPremiumButton>
                  </IonCardContentStyled>
                </AppUsageCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </StyledPage>
    </IonApp>
  );
};

export default StatsPage;

const StyledPage = styled(IonPage)`
  --ion-background-color: #090B22;
  --ion-text-color: #ffffff;

`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090B22;
    --color: #ffffff;
  }
`;

const WeeklyActivityCard = styled(IonCard)`
  background-color: #1c1c1e;
  color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow-y: auto;
  max-height: 600px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ViewSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: #ffffff;
    background-color: #2c2c2e;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;

    &.active {
      background-color: #8f46ac;
    }
  }
`;

const WeeklyActivityChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const IonCardContentStyled = styled(IonCardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarChartStyled = styled(BarChart)`
  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    display: none;
  }

  .recharts-bar-rectangle {
    border-radius: 10px 10px 0 0;
  }
`;

const AppUsageCard = styled(IonCard)`
  background-color: #2c2c2e;
  color: #ffffff;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
`;

const AppUsageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const AppIcon = styled.div`
  background-color: #8f46ac;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const AppName = styled.div`
  font-size: 16px;
`;

const AppUsage = styled.div`
  font-size: 16px;
`;

const DailyAverageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const DailyAverageText = styled.div`
  font-size: 16px;
  margin-right: 8px;
`;

const DailyAverageValue = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const BuyPremiumButton = styled.div`
  background-color: #8f46ac;
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
`;
