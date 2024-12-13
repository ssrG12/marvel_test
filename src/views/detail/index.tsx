import useDetail from '../../composables/detail/useDetail'
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

export const Detail = () => {
  const { data, comics, loader, navigateBack, loaderPage, scrollListComics, moreResults } = useDetail()

  return (
    <View style={{ padding: 20, backgroundColor: '#ED1D24', flex: 1 }} >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginBottom: 30 }}
        onPress={() => navigateBack()}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16, textDecorationLine: 'underline' }} >
          {'< '} Regresar
        </Text>
      </TouchableOpacity>
      {loader ?
        <ActivityIndicator color='#FFFFFF' style={{ marginTop: 50 }} /> :
        <FlatList
          data={comics}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          onEndReached={moreResults ? () => scrollListComics() : null}
          ListHeaderComponent={() => {
            return (
              <View>
                {data?.thumbnail?.path ?
                  <Image
                    resizeMode='stretch'
                    style={{ width: '100%', height: 300, borderRadius: 15 }}
                    source={{ uri: `${data?.thumbnail?.path}.${data?.thumbnail?.extension}` }}
                  /> : null
                }
                <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 5 }} >
                  {data?.name}
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 5, textAlign: 'justify' }} >
                  {data?.description}
                </Text>
                {comics && comics?.length > 0 ?
                  <Text style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 20, textAlign: 'justify' }} >
                    Comics en los que aparece:
                  </Text> : null
                }
              </View>
            )
          }}
          renderItem={(item) => {
            return (
              <View>
                <Text style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 5, textAlign: 'justify', fontWeight: 'bold' }} >
                  {item?.item?.title}
                </Text>
                <Image
                  resizeMode='stretch'
                  style={{ width: '100%', height: 300, borderRadius: 15, marginBottom: 10 }}
                  source={{ uri: `${item?.item?.thumbnail?.path}.${item?.item?.thumbnail?.extension}` }}
                />
              </View>
            )
          }}
          ListFooterComponent={() => {
            return (loaderPage ? <ActivityIndicator color='#FFFFFF' style={{ marginTop: 10 }} /> : null)
          }}
        />
      }
    </View>
  )
}