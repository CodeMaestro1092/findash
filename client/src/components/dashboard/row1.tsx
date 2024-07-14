import DashboardBox from '../dashboardBox'
import { api } from '@/state/api'

const Row1 = () => {
  const {data} = api.useGetKpisQuery()
  return (
    <>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1