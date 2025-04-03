import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }}
      headerImage={
        <Image
          source={require('@/assets/images/exploreimagem.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindos!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que são plataformas digitais?</ThemedText>
        <ThemedText>
        Plataformas digitais são <ThemedText type="defaultSemiBold"> </ThemedText> 
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'ambientes virtuais'
            })}
          </ThemedText>{' '}
          com serviços que transmitem conteúdo audiovisual pela internet, como filmes, séries, novelas, jogos e músicas. Elas funcionam a partir de um servidor na nuvem que armazena o conteúdo.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quais são as plataformas de streaming mais utilizadas?</ThemedText>
        <ThemedText>
          Entre as mídias digitais mais utilizadas para assistir filmes, séries e animações estão a Prime vídeo,  Disney plus, Globoplay, HBO Max, Looke, Netflix, Paramout+, MUBI, Apple TV plus, Telecine Play, Star Plus e  Crunchyroll. Essas são as 12 melhores streamings de filmes e séries!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Top 5 filmes, séries e animações mais assistidas do mundo. </ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Top 5 filmes mais assistidos: </ThemedText> Avatar, Vingadores Ultimato, Avatar O Caminho da Água, Titanic, Star Wars O Despertar da Força. {' '}
          <ThemedText type="defaultSemiBold">Top 5 séries mais assistidas: </ThemedText>Game of Thrones, Breaking Bad, Stranger Things, The Crown e The Office. {' '}
          <ThemedText type="defaultSemiBold">Top 5 animações mais assistidas: </ThemedText> Divertida Mente 2, Frozen 2, Frozen, Os Incríveis 2,Toy Story 4.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 220,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
