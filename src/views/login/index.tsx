import useLogin from '../../composables/login/useLogin'
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Login = () => {
  const { email, password, loader, setEmail, setPassword, loginUser } = useLogin()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: '#ED1D24', flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ width: '90%', padding: 20 }} >
        <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginBottom: 30 }} >
          Iniciar sesión
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 16, marginBottom: 10 }} >
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          style={{ width: '100%', borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF', fontSize: 16, paddingHorizontal: 20, paddingVertical: 10, color: '#FFFFFF' }}
        />
        <Text style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 10 }} >
          Contraseña
        </Text>
        <TextInput
          secureTextEntry
          value={password}
          keyboardType='default'
          onChangeText={setPassword}
          style={{ width: '100%', borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF', fontSize: 16, paddingHorizontal: 20, paddingVertical: 10, color: '#FFFFFF' }}
        />
        {loader ?
          <ActivityIndicator color='#FFFFFF' style={{ marginTop: 20 }} /> :
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => loginUser()}
            style={{ backgroundColor: '#FFFFFF', width: '100%', paddingVertical: 10, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
          >
            <Text style={{ color: '#ED1D24', fontSize: 16 }} >
              Ingresar
            </Text>
          </TouchableOpacity>
        }
      </View>
    </ScrollView>
  )
}