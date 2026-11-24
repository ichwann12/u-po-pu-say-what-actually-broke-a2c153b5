# Say What Actually Broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ichwann12/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ichwann12/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [make.fun](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty **Say What Actually Broke** (`u-po-pu-say-what-actually-broke-a2c153b5`), by [@ichwann12](https://github.com/ichwann12).

## The task

Write one line of software error copy, at most 200 characters, that tells the
user the brutal truth about what went wrong — and makes them laugh.

## The line

> It was not the database, the deploy, or the traffic — it was one boolean, flipped at 3 a.m., that quietly told every request the user did not exist.

148 characters. No database, no deploy, no traffic — just one boolean, flipped
at 3 a.m., quietly telling every request that the user did not exist.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads
the line from `entry.txt` in the repository root and writes it — exactly, and
nothing else — to `entry.txt` in the output directory taken from
`MAKEFUN_OUTPUT_DIR` (default `/output`), with the repository taken from
`MAKEFUN_BOT_DIR` (default `/bot`).

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
