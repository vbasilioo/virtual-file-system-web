'use client';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Separator } from '@/components/ui/separator';

export default function Charts() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
      <Card
        x-chunk="A bar chart showing the SSD usage and file management."
        className="lg:max-w-md"
      >
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>SSD</CardDescription>
          <CardTitle className="text-4xl tabular-nums">
            512{' '}
            <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
              GB Total
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              ssdUsage: {
                label: 'SSD Usage',
                color: 'hsl(var(--chart-1))',
              },
            }}
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: -4,
                right: -4,
              }}
              data={[
                {
                  date: '2024-09-01',
                  used: 200,
                  free: 312,
                },
                {
                  date: '2024-09-02',
                  used: 210,
                  free: 302,
                },
                {
                  date: '2024-09-03',
                  used: 220,
                  free: 292,
                },
                {
                  date: '2024-09-04',
                  used: 230,
                  free: 282,
                },
                {
                  date: '2024-09-05',
                  used: 240,
                  free: 272,
                },
                {
                  date: '2024-09-06',
                  used: 250,
                  free: 262,
                },
                {
                  date: '2024-09-07',
                  used: 260,
                  free: 252,
                },
              ]}
            >
              <Bar
                dataKey="used"
                fill="var(--color-used)"
                radius={5}
                fillOpacity={0.6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <Bar
                dataKey="free"
                fill="var(--color-free)"
                radius={5}
                fillOpacity={0.4}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString('en-US', {
                    weekday: 'short',
                  });
                }}
              />
              <ChartTooltip
                defaultIndex={2}
                content={
                  <ChartTooltipContent
                    hideIndicator
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      });
                    }}
                    formatter={(value, name) => [`${value} GB`, name === 'used' ? 'Usado' : 'Livre']}
                  />
                }
                cursor={false}
              />
              <ReferenceLine
                y={250}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                strokeWidth={1}
              >
                <Label
                  position="insideBottomLeft"
                  value="Average Usage"
                  offset={10}
                  fill="hsl(var(--foreground))"
                />
                <Label
                  position="insideTopLeft"
                  value="250 GB"
                  className="text-lg"
                  fill="hsl(var(--foreground))"
                  offset={10}
                  startOffset={100}
                />
              </ReferenceLine>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            Nos últimos 7 dias, você usou{' '}
            <span className="font-medium text-foreground">260 GB</span> do seu SSD.
          </CardDescription>
          <CardDescription>
            Você possui{' '}
            <span className="font-medium text-foreground">252 GB</span> de espaço livre.
          </CardDescription>
        </CardFooter>
      </Card>
      <Card
        x-chunk="Um gráfico de linha mostrando o tempo gasto em diferentes atividades de computador nos últimos 7 dias."
        className="flex flex-col lg:max-w-md"
      >
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
          <div>
            <CardDescription>Navegação</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
              15
              <span className="text-sm font-normal tracking-normal text-muted-foreground">
                hrs
              </span>
            </CardTitle>
          </div>
          <div>
            <CardDescription>Trabalho</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
              20
              <span className="text-sm font-normal tracking-normal text-muted-foreground">
                hrs
              </span>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 items-center">
          <ChartContainer
            config={{
              browsing: {
                label: 'Navegação',
                color: 'hsl(var(--chart-1))',
              },
              work: {
                label: 'Trabalho',
                color: 'hsl(var(--chart-2))',
              },
            }}
            className="w-full"
          >
            <LineChart
              accessibilityLayer
              margin={{
                left: 14,
                right: 14,
                top: 10,
              }}
              data={[
                {
                  date: '2024-01-01',
                  browsing: 3,
                  work: 2,
                },
                {
                  date: '2024-01-02',
                  browsing: 4,
                  work: 3,
                },
                {
                  date: '2024-01-03',
                  browsing: 2,
                  work: 4,
                },
                {
                  date: '2024-01-04',
                  browsing: 5,
                  work: 3,
                },
                {
                  date: '2024-01-05',
                  browsing: 2,
                  work: 5,
                },
                {
                  date: '2024-01-06',
                  browsing: 3,
                  work: 4,
                },
                {
                  date: '2024-01-07',
                  browsing: 4,
                  work: 5,
                },
              ]}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity={0.5}
              />
              <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString('en-US', {
                    weekday: 'short',
                  });
                }}
              />
              <Line
                dataKey="browsing"
                type="natural"
                fill="var(--color-browsing)"
                stroke="var(--color-browsing)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  fill: 'var(--color-browsing)',
                  stroke: 'var(--color-browsing)',
                  r: 4,
                }}
              />
              <Line
                dataKey="work"
                type="natural"
                fill="var(--color-work)"
                stroke="var(--color-work)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  fill: 'var(--color-work)',
                  stroke: 'var(--color-work)',
                  r: 4,
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      });
                    }}
                  />
                }
                cursor={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
      <Card
        x-chunk="Two horizontal bar charts showing total SSD usage during the current year and last year."
        className="max-w-xs"
      >
        <CardHeader>
          <CardTitle>Progresso de uso</CardTitle>
          <CardDescription>
            Você está usando mais armazenamento SSD este ano do que no ano passado.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              320{' '}
              <span className="text-sm font-normal text-muted-foreground">
                GB usados
              </span>
            </div>
            <ChartContainer
              config={{
                storage: {
                  label: 'SSD Usage',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    year: '2024',
                    used: 320,
                  },
                ]}
              >
                <Bar
                  dataKey="used"
                  fill="var(--color-storage)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="year"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="year" type="category" tickCount={1} hide />
                <XAxis dataKey="used" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              280{' '}
              <span className="text-sm font-normal text-muted-foreground">
                GB usados
              </span>
            </div>
            <ChartContainer
              config={{
                storage: {
                  label: 'SSD Usage',
                  color: 'hsl(var(--muted))',
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    year: '2023',
                    used: 280,
                  },
                ]}
              >
                <Bar
                  dataKey="used"
                  fill="var(--color-storage)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="year"
                    offset={8}
                    fontSize={12}
                    fill="hsl(var(--muted-foreground))"
                  />
                </Bar>
                <YAxis dataKey="year" type="category" tickCount={1} hide />
                <XAxis dataKey="used" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
        </Card>
        <Card
          x-chunk="Um gráfico de barras mostrando o uso de SSD/NVMe nos últimos 7 dias."
          className="max-w-xs"
        >
          <CardHeader className="p-4 pb-0">
            <CardTitle>Uso do SSD</CardTitle>
            <CardDescription>
              Nos últimos 7 dias, o uso médio de armazenamento no SSD foi de 320 GB por dia.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
              320
              <span className="text-sm font-normal text-muted-foreground">
                GB/dia
              </span>
            </div>
            <ChartContainer
              config={{
                armazenamento: {
                  label: 'Uso do SSD',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className="ml-auto w-[72px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: '2024-01-01',
                    uso: 280,
                  },
                  {
                    date: '2024-01-02',
                    uso: 300,
                  },
                  {
                    date: '2024-01-03',
                    uso: 310,
                  },
                  {
                    date: '2024-01-04',
                    uso: 290,
                  },
                  {
                    date: '2024-01-05',
                    uso: 320,
                  },
                  {
                    date: '2024-01-06',
                    uso: 340,
                  },
                  {
                    date: '2024-01-07',
                    uso: 360,
                  },
                ]}
              >
                <Bar
                  dataKey="uso"
                  fill="var(--color-armazenamento)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card
          x-chunk="A bar chart showing RAM usage."
          className="max-w-xs"
        >
          <CardContent className="flex gap-6 p-4 pb-2">
            <ChartContainer
              config={{
                maxRAM: {
                  label: 'Max RAM',
                  color: 'hsl(var(--chart-1))',
                },
                usedRAM: {
                  label: 'Used RAM',
                  color: 'hsl(var(--chart-2))',
                },
                freeRAM: {
                  label: 'Free RAM',
                  color: 'hsl(var(--chart-3))',
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    activity: 'Max RAM',
                    value: (16 / 16) * 100,
                    label: '16/16 GB',
                    fill: 'var(--color-maxRAM)',
                  },
                  {
                    activity: 'RAM usada',
                    value: (8 / 16) * 100,
                    label: '8/16 GB',
                    fill: 'var(--color-usedRAM)',
                  },
                  {
                    activity: 'RAM livre',
                    value: (8 / 16) * 100,
                    label: '8/16 GB',
                    fill: 'var(--color-freeRAM)',
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Max RAM</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  16
                  <span className="text-sm font-normal text-muted-foreground">
                    GB
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">RAM em uso</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  8
                  <span className="text-sm font-normal text-muted-foreground">
                    GB
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">RAM livre</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  8
                  <span className="text-sm font-normal text-muted-foreground">
                    GB
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
      <Card
        x-chunk="Um gráfico de barras radiais mostrando a porcentagem de tempo gasto em navegação, trabalho e descanso."
        className="max-w-xs"
      >
        <CardContent className="flex gap-4 p-4">
          <div className="grid items-center gap-2">
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Navegação</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                300/400
                <span className="text-sm font-normal text-muted-foreground">
                  min
                </span>
              </div>
            </div>
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Trabalho</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                150/180
                <span className="text-sm font-normal text-muted-foreground">
                  min
                </span>
              </div>
            </div>
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Descanso</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                60/120
                <span className="text-sm font-normal text-muted-foreground">
                  min
                </span>
              </div>
            </div>
          </div>
          <ChartContainer
            config={{
              browse: {
                label: 'Navegação',
                color: 'hsl(var(--chart-1))',
              },
              work: {
                label: 'Trabalho',
                color: 'hsl(var(--chart-2))',
              },
              rest: {
                label: 'Descanso',
                color: 'hsl(var(--chart-3))',
              },
            }}
            className="mx-auto aspect-square w-full max-w-[80%]"
          >
            <RadialBarChart
              margin={{
                left: -10,
                right: -10,
                top: -10,
                bottom: -10,
              }}
              data={[
                {
                  activity: 'descanso',
                  value: (60 / 120) * 100,
                  fill: 'var(--color-rest)',
                },
                {
                  activity: 'trabalho',
                  value: (150 / 180) * 100,
                  fill: 'var(--color-work)',
                },
                {
                  activity: 'navegação',
                  value: (300 / 400) * 100,
                  fill: 'var(--color-browse)',
                },
              ]}
              innerRadius="20%"
              barSize={24}
              startAngle={90}
              endAngle={450}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                dataKey="value"
                tick={false}
              />
              <RadialBar dataKey="value" background cornerRadius={5} />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card
        x-chunk="Um gráfico de barras mostrando o tempo gasto no computador nos últimos 7 dias."
        className="max-w-xs"
      >
        <CardHeader className="p-4 pb-0">
          <CardTitle>Uso do Computador</CardTitle>
          <CardDescription>
            Você está gastando uma média de 4 horas por dia no computador. Bom trabalho!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
          <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
            4
            <span className="text-sm font-normal text-muted-foreground">
              hr/dia
            </span>
          </div>
          <ChartContainer
            config={{
              usage: {
                label: 'Horas',
                color: 'hsl(var(--chart-1))',
              },
            }}
            className="ml-auto w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              data={[
                {
                  date: '2024-01-01',
                  hours: 5,
                },
                {
                  date: '2024-01-02',
                  hours: 4,
                },
                {
                  date: '2024-01-03',
                  hours: 6,
                },
                {
                  date: '2024-01-04',
                  hours: 3,
                },
                {
                  date: '2024-01-05',
                  hours: 4,
                },
                {
                  date: '2024-01-06',
                  hours: 7,
                },
                {
                  date: '2024-01-07',
                  hours: 5,
                },
              ]}
            >
              <Bar
                dataKey="hours"
                fill="var(--color-usage)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                hide
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card
        x-chunk="Um gráfico de área mostrando o tempo gasto no computador nos últimos 7 dias."
        className="max-w-xs"
      >
        <CardHeader className="space-y-0 pb-0">
          <CardDescription>Tempo no Computador</CardDescription>
          <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
            8
            <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
              hr
            </span>
            35
            <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
              min
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer
            config={{
              time: {
                label: 'Tempo',
                color: 'hsl(var(--chart-2))',
              },
            }}
          >
            <AreaChart
              accessibilityLayer
              data={[
                {
                  date: '2024-01-01',
                  time: 8.5,
                },
                {
                  date: '2024-01-02',
                  time: 7.2,
                },
                {
                  date: '2024-01-03',
                  time: 8.1,
                },
                {
                  date: '2024-01-04',
                  time: 6.2,
                },
                {
                  date: '2024-01-05',
                  time: 5.2,
                },
                {
                  date: '2024-01-06',
                  time: 8.1,
                },
                {
                  date: '2024-01-07',
                  time: 7.0,
                },
              ]}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="date" hide />
              <YAxis domain={['dataMin - 5', 'dataMax + 2']} hide />
              <defs>
                <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-time)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-time)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="time"
                type="natural"
                fill="url(#fillTime)"
                fillOpacity={0.4}
                stroke="var(--color-time)"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                formatter={(value) => (
                  <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                    Tempo no computador
                    <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                      {value}
                      <span className="font-normal text-muted-foreground">
                        hr
                      </span>
                    </div>
                  </div>
                )}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
