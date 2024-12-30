import { Text, View } from 'react-native'
import { styles } from './styles'
import { Step } from '../step'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>

      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de voçe que são parceiros do nearby"
      />
      <Step
        icon={IconQrcode}
        title="Active o coupon com QR code"
        description="Escaneie o código no estabelecimento para ver benefícios"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de voçe"
        description="Active cupons onde estiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  )
}
