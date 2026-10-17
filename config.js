// Configuração da oferta. Preço, checkout e pixel ficam SÓ aqui, nunca espalhados no HTML.
window.TF_CONFIG = {
  produto: '500 Treinos de Futebol',
  basico: { preco: '17,90', de: '49,90', checkout: 'https://pay.kiwify.com.br/TX16K00' },
  completo: { preco: '27,90', de: '99,90', checkout: 'https://pay.kiwify.com.br/MNq7n0I' },

  // Pixel da Utmify. É o ÚNICO rastreamento da página: nada de código do Facebook direto, senão duplica.
  utmifyPixelId: '6ad4069af81f5f4375504de9',

  email: '',
};
