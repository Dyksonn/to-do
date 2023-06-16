import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter"
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });


  return !fontsLoaded ? <Loading /> : <Home />
}
