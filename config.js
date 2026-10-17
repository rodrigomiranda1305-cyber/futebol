// Configuração da oferta. Preço, checkout e pixel ficam SÓ aqui, nunca espalhados no HTML.
window.TF_CONFIG = {
  produto: '500 Treinos de Futebol',
  basico: { preco: '17,90', de: '49,90', checkout: '' },
  completo: { preco: '27,90', de: '99,90', checkout: '' },

  // Pixel da Utmify. É o ÚNICO rastreamento da página: nada de código do Facebook direto, senão duplica.
  utmifyPixelId: '',

  email: '',
};
