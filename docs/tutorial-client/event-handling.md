---
title: Packet Handling
sidebar_position: 2
---

# Handling Packets & Events

Learn how to obtain and use packets received by the client.

## Connection & Packet events.

```ts
const client = new Client(...);

client.on("connect", () => {
    // Emitted once the client connects to the server.
})

client.on("packet", (packet) => {
    // Can be any possible packet
})

client.on("TextPacket", (packet) => {
    // Emitted once a TextPacket is received.
})

```