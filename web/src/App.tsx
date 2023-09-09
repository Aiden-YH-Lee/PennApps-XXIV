import { Notifications } from '@mantine/notifications'

import RootSuspense from '@/components/RootSuspense'
import MantineProvider from '@/providers/MantineProvider'
import MultiProvider from '@/providers/MultiProvider'
import TRPCProvider from '@/providers/TRPCProvider'
import Router from '@/Router'

const App: React.FC = () => {
	return (
		<MultiProvider
			providers={[<MantineProvider />, <TRPCProvider />, <RootSuspense />]}
		>
			<Router />
			<Notifications position="bottom-center" />
		</MultiProvider>
	)
}

export default App