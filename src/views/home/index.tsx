import useHome from '../../composables/home/useHome'
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

export const Home = () => {
  const { userStore, data, loader, loaderPage, scrollListHeroes, navigateDetail, logout, moreResults } = useHome()

  return (
    <View style={{ padding: 20, backgroundColor: '#ED1D24', flex: 1 }} >
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }} >
        <Text style={{ color: '#FFFFFF', fontSize: 16 }} >
          Bienvenido {userStore?.user?.name} {userStore?.user?.lastName}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => logout()}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, textDecorationLine: 'underline' }} >
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
      {loader ?
        <ActivityIndicator color='#FFFFFF' style={{ marginTop: 50 }} /> :
        <FlatList
          data={data}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          onEndReached={moreResults ? () => scrollListHeroes() : null}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigateDetail(item?.item)}
                style={{ width: '100%', marginBottom: 20 }}
              >
                <Image
                  resizeMode='stretch'
                  style={{ width: '100%', height: 200, borderRadius: 15 }}
                  source={{ uri: `${item?.item?.thumbnail?.path}.${item?.item?.thumbnail?.extension}` }}
                />
                <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 5 }} >
                  Nombre: {item?.item?.name}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 5 }} >
                  Número de comics en los que aparece: {item?.item?.comics?.available}
                </Text>
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={() => {
            return (
              loaderPage ? <ActivityIndicator color='#FFFFFF' /> : null
            )
          }}
        />
      }
    </View>
  )
}