// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Events {
    #[prost(message, repeated, tag="1")]
    pub cpunks_assigns: ::prost::alloc::vec::Vec<CpunksAssign>,
    #[prost(message, repeated, tag="2")]
    pub cpunks_punk_bid_entereds: ::prost::alloc::vec::Vec<CpunksPunkBidEntered>,
    #[prost(message, repeated, tag="3")]
    pub cpunks_punk_bid_withdrawns: ::prost::alloc::vec::Vec<CpunksPunkBidWithdrawn>,
    #[prost(message, repeated, tag="4")]
    pub cpunks_punk_boughts: ::prost::alloc::vec::Vec<CpunksPunkBought>,
    #[prost(message, repeated, tag="5")]
    pub cpunks_punk_no_longer_for_sales: ::prost::alloc::vec::Vec<CpunksPunkNoLongerForSale>,
    #[prost(message, repeated, tag="6")]
    pub cpunks_punk_offereds: ::prost::alloc::vec::Vec<CpunksPunkOffered>,
    #[prost(message, repeated, tag="7")]
    pub cpunks_punk_transfers: ::prost::alloc::vec::Vec<CpunksPunkTransfer>,
    #[prost(message, repeated, tag="8")]
    pub cpunks_transfers: ::prost::alloc::vec::Vec<CpunksTransfer>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Calls {
    #[prost(message, repeated, tag="1")]
    pub cpunks_call_buy_punks: ::prost::alloc::vec::Vec<CpunksBuyPunkCall>,
    #[prost(message, repeated, tag="2")]
    pub cpunks_call_enter_bid_for_punks: ::prost::alloc::vec::Vec<CpunksEnterBidForPunkCall>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EventsCalls {
    #[prost(message, optional, tag="1")]
    pub events: ::core::option::Option<Events>,
    #[prost(message, optional, tag="2")]
    pub calls: ::core::option::Option<Calls>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksAssign {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(bytes="vec", tag="5")]
    pub to: ::prost::alloc::vec::Vec<u8>,
    #[prost(string, tag="6")]
    pub punk_index: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkBidEntered {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(string, tag="5")]
    pub punk_index: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub value: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="7")]
    pub from_address: ::prost::alloc::vec::Vec<u8>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkBidWithdrawn {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(string, tag="5")]
    pub punk_index: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub value: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="7")]
    pub from_address: ::prost::alloc::vec::Vec<u8>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkBought {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(string, tag="5")]
    pub punk_index: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub value: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="7")]
    pub from_address: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="8")]
    pub to_address: ::prost::alloc::vec::Vec<u8>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkNoLongerForSale {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(string, tag="5")]
    pub punk_index: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkOffered {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(string, tag="5")]
    pub punk_index: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub min_value: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="7")]
    pub to_address: ::prost::alloc::vec::Vec<u8>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksPunkTransfer {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(bytes="vec", tag="5")]
    pub from: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="6")]
    pub to: ::prost::alloc::vec::Vec<u8>,
    #[prost(string, tag="7")]
    pub punk_index: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksTransfer {
    #[prost(string, tag="1")]
    pub evt_tx_hash: ::prost::alloc::string::String,
    #[prost(uint32, tag="2")]
    pub evt_index: u32,
    #[prost(message, optional, tag="3")]
    pub evt_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="4")]
    pub evt_block_number: u64,
    #[prost(bytes="vec", tag="5")]
    pub from: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="6")]
    pub to: ::prost::alloc::vec::Vec<u8>,
    #[prost(string, tag="7")]
    pub value: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksBuyPunkCall {
    #[prost(string, tag="1")]
    pub call_tx_hash: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub call_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="3")]
    pub call_block_number: u64,
    #[prost(uint64, tag="4")]
    pub call_ordinal: u64,
    #[prost(bool, tag="5")]
    pub call_success: bool,
    #[prost(string, tag="6")]
    pub punk_index: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CpunksEnterBidForPunkCall {
    #[prost(string, tag="1")]
    pub call_tx_hash: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub call_block_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(uint64, tag="3")]
    pub call_block_number: u64,
    #[prost(uint64, tag="4")]
    pub call_ordinal: u64,
    #[prost(bool, tag="5")]
    pub call_success: bool,
    #[prost(string, tag="6")]
    pub punk_index: ::prost::alloc::string::String,
}
// @@protoc_insertion_point(module)
