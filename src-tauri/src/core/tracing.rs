use std::path::Path;

use tracing::level_filters::LevelFilter;
use tracing_subscriber::layer::SubscriberExt;

pub fn inti_tracing(dir: impl AsRef<Path>) {
    let appender = tracing_appender::rolling::daily(dir, "");
    let (non_blocking, _guard) = tracing_appender::non_blocking(appender);

    #[cfg(debug_assertions)]
    let stdout_layer = tracing_subscriber::fmt::layer()
        .with_writer(std::io::stdout)
        .with_ansi(true);

    let subscriber = tracing_subscriber::FmtSubscriber::builder()
        .pretty()
        .with_writer(non_blocking)
        .with_ansi(false);

    #[cfg(debug_assertions)]
    let subscriber = subscriber.with_max_level(LevelFilter::TRACE);
    #[cfg(not(debug_assertions))]
    let subscriber = subscriber.with_max_level(LevelFilter::INFO);

    let subscriber = subscriber.finish();

    #[cfg(debug_assertions)]
    let subscriber = subscriber.with(stdout_layer);

    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
}
