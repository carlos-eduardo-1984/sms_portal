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

## Integração SMS
Substituir os pontos do método verificarLembretes() por chamadas para Android SMS Gateway.

O endpoint:  http://192.168.1.120:8080/send-sms

## Publicação
1. Criar repositório GitHub.
2. Fazer upload dos arquivos.
3. Ativar GitHub Pages.
4. Abrir URL publicada.
