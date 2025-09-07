---
title: Sending Packets
sidebar_position: 3
---

Learn how to create, send custom packets.


### TextPacket - Sending Chat messages
```ts
    // Wait for a desired event, e.g connect:
    client.on("connect", () => {
        // Create our packet and respond.
        const text = new TextPacket();
        text.message = "Hello!";
        text.needsTranslation = false;
        text.parameters = [];
        text.platformChatId = "";
        text.source = client.username;
        text.type = TextPacketType.Chat;
        text.xuid = client.profile.xuid.toString();
        text.filtered = "";

        // To send packets we use client.send and pass a serialized packet by calling .serialize()
        client.send(text.serialize());
    })
```