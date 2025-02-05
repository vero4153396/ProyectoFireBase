import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'pink',
      tabBarStyle: {
        backgroundColor: "#222",       // Color del borde superior
      },
      tabBarLabelStyle: {
        fontSize: 11,                  // Tamaño del texto
        fontWeight: "bold",            // Negrita en los labels
      },
    }}>
      <Tabs.Screen
        name="database/index"
        options={{
          title: 'Datos de la base de datos',
          tabBarLabel: "Base de datos", // 🔹 Esto cambia el nombre en el menú de tabs
          tabBarIcon: ({ color }) => <Ionicons size={28} name="file-tray-stacked-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout/index"
        options={{
          title: 'Desconectarse',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="log-out-outline" color={color} />,
        }}
      />

    </Tabs>
  )
}

export default TabsLayout
