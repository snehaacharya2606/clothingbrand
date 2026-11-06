import HeaderRaw from '@/components/HeaderRaw'
import HomeMainRaw from '@/components/HomeMainRaw'
import FooterRaw from '@/components/FooterRaw'

export default function Home() {
  return (
    <div className="wrapper">
      <div className="page">
        <HeaderRaw />
        <HomeMainRaw />
        <FooterRaw />
      </div>
    </div>
  )
}
