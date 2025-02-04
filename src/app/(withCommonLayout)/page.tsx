import HeroSection from '@/components/ui/HomePage/HeroSection/HeroSection';
import Specialist from '@/components/ui/HomePage/Specialist/Specialist';
import TopRatedDoctors from '@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default Homepage;
