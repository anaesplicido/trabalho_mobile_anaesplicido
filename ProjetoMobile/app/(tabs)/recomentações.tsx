import { StyleSheet, Image, Platform } from 'react-native';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#FF0000"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Recomendações</ThemedText>
      </ThemedView>
      <ThemedText> </ThemedText>
      <Collapsible title="Filmes">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Algumas recomendações de filmes são :</ThemedText> O Poderoso Chefão, Um Sonho de Liberdade, A Lista de Schindler, Forrest Gump, O Rei Leão, À Espera de um Milagre, O Senhor dos Anéis - O Retorno do Rei, Batman - O Cavaleiro Das Trevas, A Vida é Bela e Vingadores: Ultimato. {' '}
          <ThemedText type="defaultSemiBold">.</ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Séries">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Algumas recomendações de série são: </ThemedText> Stranger Things, Cobra Kai, Outer Banks, Bridgerton, O verão que mudou minha vida, Round 6, Prison Break, Gilmore Girls, Peaky Blinders, Eu nunca e Anne with an E.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Animações">
        <ThemedText>
           <ThemedText type="defaultSemiBold">Algumas recomendações de animações são: </ThemedText> A Bela e a Fera, Toy Story, Frozen, Up: Altas aventuras, A Pequena Sereia, Aladdin, Branca de Neve e os Sete Anões, Peter Pan, Big Hero, Moana. {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
         
        </ThemedText>
        <Image source={require('@/assets/images/camera.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Personagens">
        <ThemedText>
           <ThemedText type="defaultSemiBold">Alguns personagens que são referência na cinematografia: </ThemedText>Hannibal Lecter, Han Solo, John Rambo, Coringa, Superman, Mulher Maravilha, James Bond, Darth Vader, Tony Stark/Homem de Ferro, Harry Potter.{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
         
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Atores">
        <ThemedText>
           {' '}
          <ThemedText type="defaultSemiBold">Alguns atores que são referência na cinematografia: ()</ThemedText>
          Heath Ledger, Elizabeth Taylor, Humphrey Bogart, Cary Grant, James Stewart, Marlon Brando, Katharine Hepburn, Bette Davis, Audrey Hepburn, Ingrid Bergman. 
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Curiosidades">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">  </ThemedText>A máscara do assassino Michael Myers, em Halloween - A Noite do Terror, foi uma máscara do Capitão Kirk, de Star Trek, a atriz Emilia Clarke tatuou a palavra "Khaleesi" no pulso para lembrar a personagem Daenerys Targaryen, de Game of Thrones, Emma Watson quase desistiu de interpretar Hermione Granger, em Harry Potter, devido à pressão da fama. 
         <ThemedText type="defaultSemiBold"> </ThemedText>{' '}
          
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
               <ThemedText type="defaultSemiBold"></ThemedText>{' '}
             
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#8B0000',
    bottom: -90,
    left: -15,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
