# Smart Agenda Pro

Sistema para GitHub Pages adaptável a:
- Cabeleireiros
- Barbearias
- Manicure
- Dentistas
- Médicos
- Delivery
- Consultores

## Funcionalidades
- Agenda configurável das 07:00 às 21:00
- Até 30 atendimentos diários
- Cadastro de clientes
- Telefone e email
- Tipo de serviço
- Duração do atendimento
- Observações
- Armazenamento LocalStorage
- Preparado para integração SMS Gateway Android

## Modelo SMS
Olá {CLIENTE}.
Lembramos seu atendimento na {EMPRESA}.
Serviço: {SERVICO}
Horário: {HORARIO}

## No ANdroid device:
100% gratuito e open source, uma das melhores opções é o projeto Android SMS Gateway hospedado no GitHub.

1. Instalar o APK

Acesse o projeto:

🔗 https://github.com/capcom6/android-sms-gateway

Baixe o APK da seção Releases.

2. Instalar no Android
  1- Baixe o APK.
  2- Permita "Instalar aplicativos desconhecidos".
  3- Instale o aplicativo.
  4- Conceda as permissões:
   - SMS
   - Telefone
   - Notificações
   - Bateria (desativar otimização)
3. Configurar o Gateway
- Após abrir o aplicativo ative o servidor.
- Escolha uma porta, por exemplo: 8080
- O app mostrará o IP local do celular 192.168.1.120
- - A URL do gateway ficará parecida com: http://192.168.1.120:8080
    
4. Testar via navegador
- No PC conectado à mesma rede Wi-Fi: http://192.168.1.120:8080
- Se responder, está funcionando.


## Integração SMS
Substituir os pontos do método verificarLembretes() por chamadas para Android SMS Gateway.

O endpoint:  http://192.168.1.120:8080/send-sms

## Publicação
1. Criar repositório GitHub.
2. Fazer upload dos arquivos.
3. Ativar GitHub Pages.
4. Abrir URL publicada.
