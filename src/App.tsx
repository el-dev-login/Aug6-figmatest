import { GradientGallery } from './components/GradientGallery'
// import { GradientGalleryAnimated } from './components/GradientGalleryAnimated'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <GradientGallery />
      {/* Use GradientGalleryAnimated for smooth animations */}
    </div>
  )
}