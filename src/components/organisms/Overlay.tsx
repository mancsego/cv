import Navigation from '@/components/molecules/Navigation'

function Overlay() {
  return (
    <div className="md:hidden fixed top-0 bottom-0 left-0 right-0 z-10 pointer-events-none *:border-sky-100">
      <Navigation />
    </div>
  )
}

export default Overlay
