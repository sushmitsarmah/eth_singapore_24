mod abi;
mod pb;
use hex_literal::hex;
use pb::contract::v1 as contract;
use substreams::Hex;
use substreams_ethereum::pb::eth::v2 as eth;
use substreams_ethereum::Event;

#[allow(unused_imports)]
use num_traits::cast::ToPrimitive;
use std::str::FromStr;
use substreams::scalar::BigDecimal;

substreams_ethereum::init!();

const CPUNKS_TRACKED_CONTRACT: [u8; 20] = hex!("b47e3cd837ddf8e4c57f05d70ab865de6e193bbb");

fn map_cpunks_events(blk: &eth::Block, events: &mut contract::Events) {
    events.cpunks_assigns.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::Assign::match_and_decode(log) {
                        return Some(contract::CpunksAssign {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            punk_index: event.punk_index.to_string(),
                            to: event.to,
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_bid_entereds.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkBidEntered::match_and_decode(log) {
                        return Some(contract::CpunksPunkBidEntered {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            from_address: event.from_address,
                            punk_index: event.punk_index.to_string(),
                            value: event.value.to_string(),
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_bid_withdrawns.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkBidWithdrawn::match_and_decode(log) {
                        return Some(contract::CpunksPunkBidWithdrawn {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            from_address: event.from_address,
                            punk_index: event.punk_index.to_string(),
                            value: event.value.to_string(),
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_boughts.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkBought::match_and_decode(log) {
                        return Some(contract::CpunksPunkBought {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            from_address: event.from_address,
                            punk_index: event.punk_index.to_string(),
                            to_address: event.to_address,
                            value: event.value.to_string(),
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_no_longer_for_sales.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkNoLongerForSale::match_and_decode(log) {
                        return Some(contract::CpunksPunkNoLongerForSale {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            punk_index: event.punk_index.to_string(),
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_offereds.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkOffered::match_and_decode(log) {
                        return Some(contract::CpunksPunkOffered {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            min_value: event.min_value.to_string(),
                            punk_index: event.punk_index.to_string(),
                            to_address: event.to_address,
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_punk_transfers.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::PunkTransfer::match_and_decode(log) {
                        return Some(contract::CpunksPunkTransfer {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            from: event.from,
                            punk_index: event.punk_index.to_string(),
                            to: event.to,
                        });
                    }

                    None
                })
        })
        .collect());
    events.cpunks_transfers.append(&mut blk
        .receipts()
        .flat_map(|view| {
            view.receipt.logs.iter()
                .filter(|log| log.address == CPUNKS_TRACKED_CONTRACT)
                .filter_map(|log| {
                    if let Some(event) = abi::cpunks_contract::events::Transfer::match_and_decode(log) {
                        return Some(contract::CpunksTransfer {
                            evt_tx_hash: Hex(&view.transaction.hash).to_string(),
                            evt_index: log.block_index,
                            evt_block_time: Some(blk.timestamp().to_owned()),
                            evt_block_number: blk.number,
                            from: event.from,
                            to: event.to,
                            value: event.value.to_string(),
                        });
                    }

                    None
                })
        })
        .collect());
}
fn map_cpunks_calls(blk: &eth::Block, calls: &mut contract::Calls) {
    calls.cpunks_call_buy_punks.append(&mut blk
        .transactions()
        .flat_map(|tx| {
            tx.calls.iter()
                .filter(|call| call.address == CPUNKS_TRACKED_CONTRACT && abi::cpunks_contract::functions::BuyPunk::match_call(call))
                .filter_map(|call| {
                    match abi::cpunks_contract::functions::BuyPunk::decode(call) {
                        Ok(decoded_call) => {
                            Some(contract::CpunksBuyPunkCall {
                                call_tx_hash: Hex(&tx.hash).to_string(),
                                call_block_time: Some(blk.timestamp().to_owned()),
                                call_block_number: blk.number,
                                call_ordinal: call.begin_ordinal,
                                call_success: !call.state_reverted,
                                punk_index: decoded_call.punk_index.to_string(),
                            })
                        },
                        Err(_) => None,
                    }
                })
        })
        .collect());
    calls.cpunks_call_enter_bid_for_punks.append(&mut blk
        .transactions()
        .flat_map(|tx| {
            tx.calls.iter()
                .filter(|call| call.address == CPUNKS_TRACKED_CONTRACT && abi::cpunks_contract::functions::EnterBidForPunk::match_call(call))
                .filter_map(|call| {
                    match abi::cpunks_contract::functions::EnterBidForPunk::decode(call) {
                        Ok(decoded_call) => {
                            Some(contract::CpunksEnterBidForPunkCall {
                                call_tx_hash: Hex(&tx.hash).to_string(),
                                call_block_time: Some(blk.timestamp().to_owned()),
                                call_block_number: blk.number,
                                call_ordinal: call.begin_ordinal,
                                call_success: !call.state_reverted,
                                punk_index: decoded_call.punk_index.to_string(),
                            })
                        },
                        Err(_) => None,
                    }
                })
        })
        .collect());
}

#[substreams::handlers::map]
fn map_events_calls(
    events: contract::Events,
    calls: contract::Calls,
) -> Result<contract::EventsCalls, substreams::errors::Error> {
    Ok(contract::EventsCalls {
        events: Some(events),
        calls: Some(calls),
    })
}
#[substreams::handlers::map]
fn map_events(blk: eth::Block) -> Result<contract::Events, substreams::errors::Error> {
    let mut events = contract::Events::default();
    map_cpunks_events(&blk, &mut events);
    substreams::skip_empty_output();
    Ok(events)
}
#[substreams::handlers::map]
fn map_calls(blk: eth::Block) -> Result<contract::Calls, substreams::errors::Error> {
let mut calls = contract::Calls::default();
    map_cpunks_calls(&blk, &mut calls);
    substreams::skip_empty_output();
    Ok(calls)
}

