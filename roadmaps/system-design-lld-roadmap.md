# System Design and Low-Level Design Roadmap

## Phase 1 — Engineering foundations

- Review networking, HTTP, databases, operating systems, and concurrency.
- Learn latency, throughput, availability, durability, and consistency.
- Estimate storage, bandwidth, request volume, and peak traffic.
- Understand vertical and horizontal scaling.

## Phase 2 — Low-Level Design

- Apply SOLID principles and composition over inheritance.
- Practice interfaces, dependency injection, immutability, and error modeling.
- Learn common patterns: Strategy, Factory, Observer, Adapter, Builder, and State.
- Model requirements with class, sequence, and state diagrams.
- Write testable APIs with explicit responsibilities and boundaries.

## LLD practice problems

- Parking lot and elevator system.
- Library and inventory management.
- Splitwise-style expense sharing.
- Ride booking and food delivery.
- Chess, cards, and board games.
- Notification and logging frameworks.

## Phase 3 — Distributed system building blocks

- Load balancers, reverse proxies, API gateways, and service discovery.
- Caching strategies, CDNs, invalidation, and cache consistency.
- Database replication, partitioning, sharding, and indexing.
- Message queues, event streams, delivery guarantees, and ordering.
- Distributed locks, leader election, and consensus fundamentals.
- Rate limiting, retries, idempotency, and circuit breakers.

## Phase 4 — Architecture and tradeoffs

- Monoliths, modular monoliths, microservices, and event-driven systems.
- CAP theorem, eventual consistency, sagas, and outbox patterns.
- Multi-region deployment, disaster recovery, RPO, and RTO.
- Security boundaries, encryption, identity, and tenant isolation.
- Observability through logs, metrics, traces, and service-level objectives.

## System design practice problems

1. URL shortener and paste service.
2. Chat and notification platform.
3. News feed and social graph.
4. Video streaming and file storage.
5. Ride sharing and location tracking.
6. Payment, ordering, and inventory systems.
7. Metrics, logging, and distributed job scheduling.

## Interview framework

1. Clarify functional and non-functional requirements.
2. Estimate scale and identify constraints.
3. Define APIs and core data models.
4. Draw the high-level architecture.
5. Deep-dive into bottlenecks and failure modes.
6. Explain tradeoffs, security, observability, and evolution paths.

## Completion project

Choose one large system and produce a requirements document, capacity estimates, API specification, database schema, architecture diagram, failure analysis, and an LLD implementation of one core service.
