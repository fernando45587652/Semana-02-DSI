import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function Cats() {
  const catImages = [
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg',
      description: 'Domestic Shorthair resting',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg',
      description: 'Sphynx cat with no fur',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Turkse_angora.jpg',
      description: 'Elegant Turkish Angora',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Felis_silvestris_silvestris_Luc_Viatour.jpg',
      description: 'Wild European cat',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg',
      description: 'Fluffy Ragdoll cat',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Sokoke_dalili.jpg',
      description: 'Rare Sokoke breed',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Persian_in_Cat_Cafe.jpg',
      description: 'Persian cat in café',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Minerva-25.jpg',
      description: 'Playful tabby kitten',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Chartreux-Bonheur-nuits_indiennes-neige2009.jpg',
      description: 'French Chartreux breed',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Nona_March.jpg',
      description: 'Majestic Maine Coon',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galeria de Gatos 🐱</Text>
      {catImages.map((cat, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: cat.uri }} style={styles.image} />
          <Text style={styles.description}>{cat.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 12,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#fff',
    fontStyle: 'italic',
  },
});